<?php

use Mindy\Template\Renderer;
use Mindy\Helper\Console;

return [
    'basePath' => dirname(__FILE__) . '/../',
    'name' => 'Mindy',
    'managers' => [
        'admin@admin.com'
    ],
    'locale' => [
        'language' => 'ru',
        'sourceLanguage' => 'en',
        'charset' => 'utf-8',
    ],
    'components' => [
        'middleware' => [
            'class' => '\Mindy\Middleware\MiddlewareManager',
            'middleware' => [
            ]
        ],

        'signal' => [
            'class' => '\Mindy\Event\EventManager',
            'events' => dirname(__FILE__) . DIRECTORY_SEPARATOR . 'events.php',
        ],

        'db' => [
            'class' => '\Mindy\Query\ConnectionManager',
            'databases' => [
                'default' => [
                    'class' => '\Mindy\Query\Connection',
                    'dsn' => 'mysql:host=127.0.0.1;dbname=db',
                    'username' => 'user',
                    'password' => 'password',
                    'charset' => 'utf8',
                ]
            ]
        ],
        'permissions' => [
            'class' => '\Modules\User\Components\Permissions'
        ],
        'mail' => [
            'class' => '\Modules\Mail\Components\DbMailer',
        ],
        'finder' => [
            'class' => '\Mindy\Finder\Finder',
            'finders' => [
                ['class' => '\Mindy\Finder\Finder\TemplateFinder'],
                /*
                [
                    'class' => '\Mindy\Finder\Finder\ThemeTemplateFinder',
                    'theme' => function () {
                        static $isMobile = false;
                        return $isMobile ? 'mobile' : 'default';
                    }
                ],
                */
                ['class' => '\Mindy\Finder\Finder\AppTemplateFinder'],
            ],
        ],
        'request' => [
            'class' => '\Mindy\Http\Request',
            'enableCsrfValidation' => false
        ],
        'auth' => [
            'class' => '\Modules\User\Components\Auth',
            'allowAutoLogin' => true,
            'autoRenewCookie' => true,
        ],
        'cache' => [
            'class' => '\Mindy\Cache\DummyCache'
        ],
        'storage' => [
            'class' => '\Mindy\Storage\FileSystemStorage',
        ],
        'template' => [
            'class' => '\Mindy\Template\Renderer',
            'mode' => MINDY_DEBUG ? Renderer::RECOMPILE_ALWAYS : Renderer::RECOMPILE_NEVER,
        ],
        'session' => [
            'class' => '\Modules\User\Components\UserSession',
            'sessionName' => 'mindy',
            'autoStart' => !Console::isCli()
        ],
        'logger' => [
            'class' => '\Mindy\Logger\LoggerManager',
            'handlers' => [
                'default' => [
                    'class' => '\Mindy\Logger\Handler\RotatingFileHandler',
                    'level' => MINDY_DEBUG ? "DEBUG" : "ERROR"
                ],
                'null' => [
                    'class' => '\Mindy\Logger\Handler\NullHandler',
                    'level' => 'ERROR'
                ],
                'console' => [
                    'class' => '\Mindy\Logger\Handler\StreamHandler',
                ],
                'users' => [
                    'class' => '\Mindy\Logger\Handler\RotatingFileHandler',
                    'alias' => 'application.runtime.users',
                    'level' => 'INFO',
                    'formatter' => 'users'
                ],
                'mail_admins' => [
                    'class' => '\Mindy\Logger\Handler\SwiftMailerHandler',
                ],
            ],
            'formatters' => [
                'users' => [
                    'class' => '\Mindy\Logger\Formatters\LineFormatter',
                    'format' => "%datetime% %message%\n"
                ]
            ],
            'loggers' => [
                'users' => [
                    'class' => '\Monolog\Logger',
                    'handlers' => ['users'],
                ],
            ]
        ],
    ],
    'preload' => [
        'logger',
        'db',
    ],
    'modules' => include(__DIR__ . '/modules.php')
];
