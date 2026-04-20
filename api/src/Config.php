<?php

declare(strict_types=1);

namespace Aisco\Api;

use Dotenv\Dotenv;

final class Config
{
    private static bool $loaded = false;

    public static function load(string $basePath): void
    {
        if (self::$loaded) {
            return;
        }
        if (is_file($basePath . '/.env')) {
            Dotenv::createImmutable($basePath)->safeLoad();
        }
        self::$loaded = true;
    }

    public static function string(string $key, string $default = ''): string
    {
        $v = $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key);
        if ($v === false || $v === null || $v === '') {
            return $default;
        }
        return (string) $v;
    }

    public static function bool(string $key, bool $default = false): bool
    {
        $v = self::string($key, $default ? '1' : '0');
        return filter_var($v, FILTER_VALIDATE_BOOLEAN);
    }

    public static function isProduction(): bool
    {
        return strtolower(self::string('APP_ENV', self::string('NODE_ENV', 'development'))) === 'production';
    }
}
