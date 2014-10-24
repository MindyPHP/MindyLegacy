<?php

use Mindy\Router\Patterns;

return [
    '/user' => new Patterns('User.urls', 'user'),
    '/core' => new Patterns('Modules.Admin.urls', 'admin'),
    '/core/files' => new Patterns('Modules.Files.urls', 'files'),
    '/core/translate' => new Patterns('Modules.Translate.urls', 'translate'),
    '/core/engine' => new Patterns('Modules.Core.urls', 'core'),
    '/mail' => new Patterns('Modules.Mail.urls', 'mail'),
    '' => new Patterns('Modules.Sitemap.urls', 'sitemap'),
    '/api' => new Patterns('Modules.Api.urls', 'api'),
    '/sape' => new Patterns('Modules.Sape.urls', 'sape'),
    '/forum' => new Patterns('Modules.Forum.urls', 'forum'),
    '/catalog' => new Patterns('Modules.Catalog.urls', 'catalog'),
    '/pages' => new Patterns('Modules.Pages.urls', 'page'),
    '/blog' => new Patterns('Modules.Blog.urls', 'blog'),
//    '/' => new Patterns('Modules.Realty.urls', 'realty'),
    '/' => new Patterns('Modules.Games.urls', 'games'),
    '/robots.txt' => new Patterns('Modules.Sites.urls', 'sites'),
];
