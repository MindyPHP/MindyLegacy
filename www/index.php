<?php

defined('MINDY_PATH') or define('MINDY_PATH', dirname(__FILE__) . DIRECTORY_SEPARATOR);

$debug = true;
if ($debug) {
    defined('YII_DEBUG') or define('YII_DEBUG', true);
    defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL', 3);
    defined('YII_ENABLE_ERROR_HANDLER') or define('YII_ENABLE_ERROR_HANDLER', true);
    defined('YII_ENABLE_EXCEPTION_HANDLER') or define('YII_ENABLE_EXCEPTION_HANDLER', true);
    ini_set('error_reporting', -1);
}
$config = MINDY_PATH . '../app/config/settings';
if (is_file($config . '_local.php')) {
    $config .= '_local';
}

// Composer autoloader
if (!is_file(MINDY_PATH . '../app/vendor/autoload.php')) {
    throw new Exception("Please run 'composer install' in app/ directory");
}
$autoload = include(MINDY_PATH . '../app/vendor/autoload.php');
$autoload->add('Modules\\', MINDY_PATH . '../app');

$app = \Mindy\Base\Mindy::getInstance($config . '.php');
$app->run();