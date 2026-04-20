<?php

declare(strict_types=1);

namespace Aisco\Api;

final class Cors
{
    public static function apply(): void
    {
        $clientUrl = Config::string('CLIENT_URL');
        if ($clientUrl !== '') {
            header('Access-Control-Allow-Origin: ' . $clientUrl);
        } elseif (!Config::isProduction()) {
            header('Access-Control-Allow-Origin: http://localhost:5173');
        }
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }

    public static function handleOptions(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'OPTIONS') {
            return;
        }
        self::apply();
        http_response_code(204);
        exit;
    }
}
