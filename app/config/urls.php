<?php

use Mindy\Router\Patterns;

return [
    '/user' => new Patterns('User.urls', 'user'),
    '/core' => new Patterns('Modules.Admin.urls', 'admin'),
    '/core/engine' => new Patterns('Modules.Core.urls', 'core'),
    '/mail' => new Patterns('Modules.Mail.urls', 'mail'),
    '/sitemap' => new Patterns('Modules.Sitemap.urls', 'sitemap'),
    '/' => new Patterns('Modules.Shop.urls', 'shop'),
];
