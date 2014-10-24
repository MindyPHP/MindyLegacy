<?php

use Modules\Pages\Sitemap\PageSitemap;
use Modules\Blog\Sitemap\PostSitemap;
use Modules\Blog\Sitemap\CategorySitemap as BlogCategorySitemap;
use Modules\Catalog\Sitemap\CategorySitemap as CatalogCategorySitemap;
use Modules\Catalog\Sitemap\ProductSitemap;
use Modules\Realty\Sitemap\NewLifeObjectSitemap;
use Modules\Realty\Sitemap\OldLifeObjectSitemap;

return [
    'pages' => new PageSitemap,
    'blog-posts' => new PostSitemap,
    'blog-category' => new BlogCategorySitemap,
    'catalog-category' => new CatalogCategorySitemap,
    'catalog-product' => new ProductSitemap,
    'new-object' => new NewLifeObjectSitemap,
    'old-object' => new OldLifeObjectSitemap,
];