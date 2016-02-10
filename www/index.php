<?php

defined('MINDY_PATH') or define('MINDY_PATH', dirname(__FILE__) . DIRECTORY_SEPARATOR);

$config = MINDY_PATH . '../app/config/settings';
$debug = is_file($config . '_local.php');

if ($debug) {
    defined('MINDY_DEBUG') or define('MINDY_DEBUG', true);
    defined('MINDY_TRACE_LEVEL') or define('MINDY_TRACE_LEVEL', 3);
    defined('MINDY_ENABLE_ERROR_HANDLER') or define('MINDY_ENABLE_ERROR_HANDLER', true);
    defined('MINDY_ENABLE_EXCEPTION_HANDLER') or define('MINDY_ENABLE_EXCEPTION_HANDLER', true);
    ini_set('error_reporting', -1);
    $config .= '_local';
}

// Composer autoloader
if (!is_file(MINDY_PATH . '../app/vendor/autoload.php')) {
    throw new Exception("Please run 'composer install' in app/ directory");
}

$autoloader = include(MINDY_PATH . '../app/vendor/autoload.php');

$app = \Mindy\Base\Mindy::getInstance($config . '.php');
$app->run();
