<?php

declare(strict_types=1);

namespace Aisco\Api;

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

final class MailService
{
    private static function createMailer(): PHPMailer
    {
        $mail = new PHPMailer(true);
        $host = Config::string('SMTP_HOST');
        $user = Config::string('SMTP_USER');
        $pass = Config::string('SMTP_PASSWORD');
        $port = (int) Config::string('SMTP_PORT', '465');
        $mail->isSMTP();
        $mail->Host = $host;
        $mail->SMTPAuth = true;
        $mail->Username = $user;
        $mail->Password = $pass;
        $mail->Port = $port;
        if ($port === 465 || Config::string('SMTP_SECURE') === 'true') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        }
        $mail->CharSet = 'UTF-8';
        $mail->SMTPOptions = [
            'ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true],
        ];

        return $mail;
    }

    public static function smtpConfigured(): bool
    {
        return Config::string('SMTP_HOST') !== ''
            && Config::string('SMTP_USER') !== ''
            && Config::string('SMTP_PASSWORD') !== '';
    }

    /** @param array<string, mixed> $formData */
    public static function formatQuoteRequestEmail(array $formData): string
    {
        $submitted = htmlspecialchars(date('Y-m-d H:i:s'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $requiredDiameter = isset($formData['requiredDiameter']) && is_array($formData['requiredDiameter'])
            ? implode(', ', $formData['requiredDiameter'])
            : (string) ($formData['requiredDiameter'] ?? 'N/A');

        $fullName = htmlspecialchars((string) ($formData['fullName'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $companyName = htmlspecialchars((string) ($formData['companyName'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $emailAddress = htmlspecialchars((string) ($formData['emailAddress'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $cc = htmlspecialchars((string) ($formData['countryCode'] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $phoneNumber = htmlspecialchars((string) ($formData['phoneNumber'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $waCc = htmlspecialchars((string) ($formData['whatsappCountryCode'] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $waNum = htmlspecialchars((string) ($formData['whatsappNumber'] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $projectLocation = htmlspecialchars((string) ($formData['projectLocation'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $productType = htmlspecialchars((string) ($formData['productType'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $quantityRange = htmlspecialchars((string) ($formData['quantityRange'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $rd = htmlspecialchars($requiredDiameter, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $projectTimeline = htmlspecialchars((string) ($formData['projectTimeline'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $deliveryReq = !empty($formData['deliveryRequired']) ? 'Yes' : 'No';
        $deliveryLocation = htmlspecialchars((string) ($formData['deliveryLocation'] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $message = isset($formData['message']) ? nl2br(htmlspecialchars((string) $formData['message'], ENT_QUOTES | ENT_HTML5, 'UTF-8')) : '';

        $waBlock = $waNum !== ''
            ? "<p><strong>WhatsApp:</strong> {$waCc} {$waNum}</p>"
            : '';
        $msgBlock = $message !== ''
            ? "<div style=\"margin-top: 20px;\"><h3 style=\"color: #374151; margin-top: 15px;\">Additional Message:</h3><p style=\"background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;\">{$message}</p></div>"
            : '';
        $dlBlock = $deliveryLocation !== ''
            ? "<p><strong>Delivery Location:</strong> {$deliveryLocation}</p>"
            : '';

        return <<<HTML
    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
      New Quote Request Form Submission
    </h2>

    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Contact Information:</h3>
      <p><strong>Full Name:</strong> {$fullName}</p>
      <p><strong>Company Name:</strong> {$companyName}</p>
      <p><strong>Email Address:</strong> {$emailAddress}</p>
      <p><strong>Phone Number:</strong> {$cc} {$phoneNumber}</p>
      {$waBlock}
    </div>

    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Project Details:</h3>
      <p><strong>Project Location:</strong> {$projectLocation}</p>
      <p><strong>Product Type:</strong> {$productType}</p>
      <p><strong>Quantity Range:</strong> {$quantityRange}</p>
      <p><strong>Required Diameter:</strong> {$rd}</p>
      <p><strong>Project Timeline:</strong> {$projectTimeline}</p>
      <p><strong>Delivery Required:</strong> {$deliveryReq}</p>
      {$dlBlock}
    </div>

    {$msgBlock}

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
      <p>Submitted at: {$submitted}</p>
    </div>
HTML;
    }

    /** @param array<string, mixed> $formData */
    public static function formatContactInquiryEmail(array $formData): string
    {
        $submitted = htmlspecialchars(date('Y-m-d H:i:s'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $fullName = htmlspecialchars((string) ($formData['fullName'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $company = isset($formData['company']) ? htmlspecialchars((string) $formData['company'], ENT_QUOTES | ENT_HTML5, 'UTF-8') : '';
        $email = htmlspecialchars((string) ($formData['email'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $cc = htmlspecialchars((string) ($formData['countryCode'] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $phone = htmlspecialchars((string) ($formData['phone'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $subject = htmlspecialchars((string) ($formData['subject'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $message = nl2br(htmlspecialchars((string) ($formData['message'] ?? 'N/A'), ENT_QUOTES | ENT_HTML5, 'UTF-8'));

        $companyBlock = $company !== '' ? "<p><strong>Company:</strong> {$company}</p>" : '';

        return <<<HTML
    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
      New Quick Inquiry Form Submission
    </h2>

    <div style="margin-top: 20px; line-height: 1.8;">
      <h3 style="color: #374151; margin-top: 15px;">Contact Information:</h3>
      <p><strong>Full Name:</strong> {$fullName}</p>
      {$companyBlock}
      <p><strong>Email Address:</strong> {$email}</p>
      <p><strong>Phone Number:</strong> {$cc} {$phone}</p>
      <p><strong>Subject:</strong> {$subject}</p>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #374151; margin-top: 15px;">Message:</h3>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">{$message}</p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
      <p>Submitted at: {$submitted}</p>
    </div>
HTML;
    }

    /** @param array<string, mixed> $formData */
    public static function sendQuoteRequestEmail(array $formData): array
    {
        if (!self::smtpConfigured()) {
            return ['success' => false, 'error' => 'Email credentials not configured'];
        }
        try {
            $mail = self::createMailer();
            $recipient = Config::string('SMTP_RECIPIENT') ?: Config::string('SMTP_USER');
            $replyTo = (string) ($formData['emailAddress'] ?? Config::string('SMTP_USER'));
            $mail->setFrom(Config::string('SMTP_USER'), 'AISCO Website');
            $mail->addAddress($recipient);
            $mail->addReplyTo($replyTo);
            $mail->isHTML(true);
            $mail->Subject = 'New Quote Request from ' . ($formData['fullName'] ?? 'Customer');
            $mail->Body = self::formatQuoteRequestEmail($formData);
            $mail->send();
            return ['success' => true, 'messageId' => $mail->getLastMessageID()];
        } catch (MailException $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /** @param array<string, mixed> $formData — parity with Node: "to" uses form email first */
    public static function sendContactInquiryEmail(array $formData): array
    {
        if (!self::smtpConfigured()) {
            return ['success' => false, 'error' => 'Email credentials not configured'];
        }
        try {
            $mail = self::createMailer();
            $recipientEmail = (string) ($formData['email'] ?? '')
                ?: (Config::string('SMTP_RECIPIENT') ?: Config::string('SMTP_USER'));
            $replyTo = (string) ($formData['email'] ?? Config::string('SMTP_USER'));
            $mail->setFrom(Config::string('SMTP_USER'), 'AISCO Website');
            $mail->addAddress($recipientEmail);
            $mail->addReplyTo($replyTo);
            $mail->isHTML(true);
            $mail->Subject = 'New Quick Inquiry: ' . ($formData['subject'] ?? 'No Subject');
            $mail->Body = self::formatContactInquiryEmail($formData);
            $mail->send();
            return ['success' => true, 'messageId' => $mail->getLastMessageID()];
        } catch (MailException $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}
