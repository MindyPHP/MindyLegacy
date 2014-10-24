<?php

defined('MINDY_PATH') or define('MINDY_PATH', dirname(__FILE__) . '/../../www/');

$debug = true;
if ($debug) {
    defined('YII_DEBUG') or define('YII_DEBUG', true);
    defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL', 3);
    defined('YII_ENABLE_ERROR_HANDLER') or define('YII_ENABLE_ERROR_HANDLER', true);
    defined('YII_ENABLE_EXCEPTION_HANDLER') or define('YII_ENABLE_EXCEPTION_HANDLER', true);
    ini_set('error_reporting', 0);
}

// Composer autoloader
if (!is_file(MINDY_PATH . '../app/vendor/autoload.php')) {
    throw new Exception("Please run 'composer install' in app/ directory");
}
$autoload = include(MINDY_PATH . '../app/vendor/autoload.php');
$autoload->add('Modules\\', MINDY_PATH . '../app');

require __DIR__ . '/TestCase.php';
require __DIR__ . '/DatabaseTestCase.php';

$app = \Mindy\Base\Mindy::getInstance(MINDY_PATH . '../app/config/settings_test.php');