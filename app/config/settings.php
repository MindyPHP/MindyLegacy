<?php

use Mindy\Helper\Params;

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
        'language' => 'en',
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
            // 'mode' => YII_DEBUG ? \Mindy\Template\Renderer::RECOMPILE_ALWAYS : \Mindy\Template\Renderer::RECOMPILE_NORMAL,
            'mode' => \Mindy\Template\Renderer::RECOMPILE_ALWAYS,
        ],
        'errorHandler' => [
            'class' => '\Mindy\Base\ErrorHandler',
            'adminInfo' => Params::get('core.email_webmaster'),
            'errorAction' => 'core/main/error'
        ],
        'session' => [
            'class' => '\Modules\User\Components\UserSession',
            'sessionName' => 'mindy',
        ],
        'generator' => [
            'class' => '\Mindy\Base\Generator'
        ],
    ],
    'preload' => [
        'log',
        'db',
    ],
    'modules' => include(__DIR__ . '/modules.php')
];
