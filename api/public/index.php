<?php

declare(strict_types=1);

$base = dirname(__DIR__);
require $base . '/vendor/autoload.php';

use Aisco\Api\Config;
use Aisco\Api\Cors;
use Aisco\Api\Handlers;

Config::load($base);
Cors::handleOptions();
Cors::apply();

$uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
$prefixConfig = Config::string('API_PATH_PREFIX');
if ($prefixConfig !== '') {
    $prefix = rtrim($prefixConfig, '/');
} else {
    $prefix = '/api';
}
if (!str_starts_with($uriPath, $prefix)) {
    Handlers::sendJson(['error' => 'Not found'], 404);
    exit;
}
$rest = trim(substr($uriPath, strlen($prefix)), '/');
$segment = explode('/', $rest)[0] ?? '';

switch ($segment) {
    case 'quote':
        Handlers::quote();
        break;
    case 'contact':
        Handlers::contact();
        break;
    case 'inquiry':
        Handlers::inquiry();
        break;
    case 'test-email':
        Handlers::testEmail();
        break;
    case 'health':
        if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET') {
            Handlers::health();
        } else {
            Handlers::sendJson(['error' => 'Method not allowed'], 405);
        }
        break;
    default:
        Handlers::sendJson(['error' => 'Not found'], 404);
}
