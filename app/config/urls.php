<?php

use Mindy\Router\Patterns;

return [
    '/auth' => new Patterns('Modules.Auth.urls', 'auth'),
    '/user' => new Patterns('Modules.User.urls', 'user'),
    '/core' => new Patterns('Modules.Admin.urls', 'admin'),
    '/core/engine' => new Patterns('Modules.Core.urls', 'core'),
    '/mail' => new Patterns('Modules.Mail.urls', 'mail'),
    '/sitemap' => new Patterns('Modules.Sitemap.urls', 'sitemap'),
    '/' => new Patterns('Modules.Pages.urls', 'pages'),
];
