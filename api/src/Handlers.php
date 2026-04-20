<?php

declare(strict_types=1);

namespace Aisco\Api;

use PDO;
use PDOException;
use Throwable;

final class Handlers
{
    /** @param array<string, mixed>|null $body */
    private static function jsonBody(): ?array
    {
        $raw = file_get_contents('php://input');
        if ($raw === false || $raw === '') {
            return [];
        }
        $decoded = json_decode($raw, true);
        return is_array($decoded) ? $decoded : null;
    }

    public static function sendJson(mixed $data, int $code = 200): void
    {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
    }

    public static function health(): void
    {
        $payload = ['status' => 'ok', 'timestamp' => gmdate('c')];
        $checkDb = isset($_GET['db']) && $_GET['db'] !== '' && $_GET['db'] !== '0';
        if ($checkDb) {
            try {
                Db::pdo()->query('SELECT 1');
                $payload['database'] = ['ok' => true];
            } catch (Throwable $e) {
                $payload['database'] = [
                    'ok' => false,
                    'error' => Config::isProduction() ? 'Connection failed' : $e->getMessage(),
                ];
            }
        }
        self::sendJson($payload);
    }

    public static function quote(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            self::sendJson(['error' => 'Method not allowed'], 405);
            return;
        }
        $q = self::jsonBody();
        if ($q === null) {
            self::sendJson(['error' => 'Invalid JSON'], 400);
            return;
        }

        $requiredDiameter = isset($q['requiredDiameter']) && is_array($q['requiredDiameter'])
            ? implode(',', $q['requiredDiameter'])
            : (string) ($q['requiredDiameter'] ?? '');

        $sql = 'INSERT INTO quote_requests (fullName, companyName, countryCode, phoneNumber, whatsappCountryCode, whatsappNumber, emailAddress, projectLocation, productType, quantityRange, requiredDiameter, deliveryRequired, deliveryLocation, projectTimeline, message, agreeToTerms, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';

        try {
            $pdo = Db::pdo();
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                $q['fullName'] ?? '',
                $q['companyName'] ?? '',
                $q['countryCode'] ?? '',
                $q['phoneNumber'] ?? '',
                $q['whatsappCountryCode'] ?? '',
                $q['whatsappNumber'] ?? '',
                $q['emailAddress'] ?? '',
                $q['projectLocation'] ?? '',
                $q['productType'] ?? '',
                $q['quantityRange'] ?? '',
                $requiredDiameter,
                !empty($q['deliveryRequired']) ? 1 : 0,
                $q['deliveryLocation'] ?? '',
                $q['projectTimeline'] ?? '',
                $q['message'] ?? '',
                !empty($q['agreeToTerms']) ? 1 : 0,
            ]);
            $id = (int) $pdo->lastInsertId();
            try {
                MailService::sendQuoteRequestEmail($q);
            } catch (Throwable $e) {
                error_log('Failed to send quote request email: ' . $e->getMessage());
            }
            self::sendJson(['success' => true, 'id' => $id]);
        } catch (PDOException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        } catch (\RuntimeException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        }
    }

    public static function contact(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            self::sendJson(['error' => 'Method not allowed'], 405);
            return;
        }
        $c = self::jsonBody();
        if ($c === null) {
            self::sendJson(['error' => 'Invalid JSON'], 400);
            return;
        }

        $sql = 'INSERT INTO contact_inquiries (fullName, company, countryCode, phone, email, subject, message, agreeToPrivacy, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())';

        try {
            $pdo = Db::pdo();
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                $c['fullName'] ?? '',
                $c['company'] ?? '',
                $c['countryCode'] ?? '',
                $c['phone'] ?? '',
                $c['email'] ?? '',
                $c['subject'] ?? '',
                $c['message'] ?? '',
                !empty($c['agreeToPrivacy']) ? 1 : 0,
            ]);
            $id = (int) $pdo->lastInsertId();
            try {
                MailService::sendContactInquiryEmail($c);
            } catch (Throwable $e) {
                error_log('Failed to send contact inquiry email: ' . $e->getMessage());
            }
            self::sendJson(['success' => true, 'id' => $id]);
        } catch (PDOException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        } catch (\RuntimeException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        }
    }

    public static function inquiry(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            self::sendJson(['error' => 'Method not allowed'], 405);
            return;
        }
        $p = self::jsonBody();
        if ($p === null) {
            self::sendJson(['error' => 'Invalid JSON'], 400);
            return;
        }

        $sql = 'INSERT INTO quote_requests (fullName, companyName, countryCode, phoneNumber, whatsappCountryCode, whatsappNumber, emailAddress, projectLocation, productType, quantityRange, requiredDiameter, deliveryRequired, deliveryLocation, projectTimeline, message, agreeToTerms, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';

        try {
            $pdo = Db::pdo();
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                $p['name'] ?? '',
                $p['company'] ?? '',
                '',
                $p['phone'] ?? '',
                null,
                null,
                $p['email'] ?? '',
                $p['deliveryLocation'] ?? '',
                $p['projectType'] ?? '',
                $p['quantity'] ?? '',
                $p['rebarDiameter'] ?? '',
                0,
                $p['deliveryLocation'] ?? '',
                $p['timeline'] ?? '',
                $p['message'] ?? '',
                1,
            ]);
            $id = (int) $pdo->lastInsertId();
            self::sendJson(['success' => true, 'id' => $id]);
        } catch (PDOException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        } catch (\RuntimeException $e) {
            self::sendJson(['error' => $e->getMessage()], 500);
        }
    }

    public static function testEmail(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            self::sendJson(['error' => 'Method not allowed'], 405);
            return;
        }
        $body = self::jsonBody() ?? [];
        $timestamp = gmdate('c');

        if (!MailService::smtpConfigured()) {
            self::sendJson([
                'success' => false,
                'error' => 'Email configuration incomplete. Please configure SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env file',
                'configStatus' => [
                    'hasHost' => Config::string('SMTP_HOST') !== '',
                    'hasUser' => Config::string('SMTP_USER') !== '',
                    'hasPassword' => Config::string('SMTP_PASSWORD') !== '',
                    'hasPort' => Config::string('SMTP_PORT') !== '',
                ],
            ], 400);
            return;
        }

        $toEmail = isset($body['toEmail']) ? (string) $body['toEmail'] : '';
        $subject = isset($body['subject']) ? (string) $body['subject'] : '';
        $message = isset($body['message']) ? (string) $body['message'] : '';
        $recipientEmail = $toEmail !== '' ? $toEmail : (Config::string('SMTP_RECIPIENT') ?: Config::string('SMTP_USER'));

        $formData = [
            'fullName' => 'Test User',
            'company' => 'AISCO Test',
            'countryCode' => '',
            'phone' => '',
            'email' => $recipientEmail,
            'subject' => $subject !== '' ? $subject : 'AISCO Test Email from API',
            'message' => $message !== '' ? $message : 'This is a test email sent via the /api/test-email endpoint.',
        ];

        $sendStart = microtime(true);
        $result = MailService::sendContactInquiryEmail($formData);
        $durationMs = (int) round((microtime(true) - $sendStart) * 1000);

        if (!$result['success']) {
            self::sendJson([
                'success' => false,
                'error' => $result['error'] ?? 'Failed to send test email',
                'duration' => $durationMs . 'ms',
            ], 500);
            return;
        }

        self::sendJson([
            'success' => true,
            'message' => 'Test email sent successfully',
            'messageId' => $result['messageId'] ?? null,
            'recipient' => $recipientEmail,
            'duration' => $durationMs . 'ms',
            'timestamp' => $timestamp,
        ]);
    }
}
