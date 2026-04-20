<?php

declare(strict_types=1);

namespace Aisco\Api;

use PDO;
use PDOException;

final class Db
{
    private static ?PDO $pdo = null;

    public static function pdo(): PDO
    {
        if (self::$pdo !== null) {
            return self::$pdo;
        }
        $host = Config::string('MYSQL_HOST', 'localhost');
        $db = Config::string('MYSQL_DATABASE', 'aisco');
        $user = Config::string('MYSQL_USER', 'root');
        $pass = Config::string('MYSQL_PASSWORD', '');
        $dsn = "mysql:host={$host};dbname={$db};charset=utf8mb4";
        try {
            self::$pdo = new PDO($dsn, $user, $pass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (PDOException $e) {
            throw new \RuntimeException('Database connection failed: ' . $e->getMessage(), 0, $e);
        }
        return self::$pdo;
    }
}
