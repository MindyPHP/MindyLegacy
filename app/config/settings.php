<?php

use Mindy\Helper\Params;
use Mindy\Template\Renderer;
use Mindy\Helper\Console;

return [
    'basePath' => dirname(__FILE__) . '/../',
    'name' => 'Mindy',
    'behaviors' => [
        'ParamsCollectionBehavior' => [
            'class' => '\Mindy\Base\ParamsCollectionBehavior'
        ],
    ],
    'managers' => [
        'qwe@qwe.com'
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
                'CurrentSiteMiddleware' => [
                    'class' => '\Modules\Sites\Middleware\CurrentSiteMiddleware'
                ],
                'RedirectMiddleware' => [
                    'class' => '\Modules\Redirect\Middleware\RedirectMiddleware'
                ],
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
            'class' => '\Mindy\Finder\FinderFactory',
        ],
        'authManager' => [
            'class' => '\Modules\User\Components\Permissions\PermissionManager',
        ],
        'authGenerator' => [
            'class' => 'MPermissionGenerator'
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
        'errorHandler' => [
            'class' => '\Mindy\Base\ErrorHandler',
            'adminInfo' => Params::get('core.email_webmaster'),
            'errorAction' => 'core/main/error'
        ],
        'session' => [
            'class' => '\Modules\User\Components\UserSession',
            'sessionName' => 'mindy',
            'autoStart' => !Console::isCli()
        ],
        'generator' => [
            'class' => '\Mindy\Base\Generator'
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
        'log',
        'db',
    ],
    'modules' => include(__DIR__ . '/modules.php')
];
