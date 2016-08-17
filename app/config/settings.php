<?php

use Mindy\Helper\Console;
use Mindy\Template\Renderer;
use Mindy\Helper\Alias;

use League\Flysystem\Adapter\Local;
use League\Flysystem\Cached\CachedAdapter;
use League\Flysystem\Cached\Storage\Memory as CacheStore;

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
            'class' => '\Modules\User\Permissions\Permissions'
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
            'class' => '\Mindy\Http\Http',
            'enableCsrfValidation' => false,
            'middleware' => include('middleware.php'),
            'session' => [
                'class' => '\Modules\User\Session\UserSession',
                'sessionName' => 'mindy',
                'autoStart' => false,
                'iniOptions' => [
                    'gc_maxlifetime' => 60 * 60 * 24
                ]
            ],
        ],
        'auth' => [
            'class' => '\Modules\Auth\Components\Auth',
            'allowAutoLogin' => true,
            'autoRenewCookie' => true,
            'strategies' => [
                'local' => ['class' => '\Modules\Auth\Strategy\LocalStrategy'],
            ]
        ],
        'cache' => [
            'class' => '\Mindy\Cache\DummyCache'
        ],
        'storage' => [
            'class' => '\Mindy\Storage\Storage',
            'adapters' => [
                'default' => function () {
                    $path = Alias::get('www.media');
                    // Create the adapter
                    $localAdapter = new Local($path);
                    // Create the cache store
                    $cacheStore = new CacheStore();
                    // Decorate the adapter
                    return new CachedAdapter($localAdapter, $cacheStore);
                }
            ]
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
