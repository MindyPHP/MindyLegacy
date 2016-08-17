<?php

use function GuzzleHttp\Psr7\stream_for;

use Mindy\Base\Mindy;
use Mindy\Middleware\AjaxRedirect;
use Modules\Redirect\Middleware\RedirectMiddleware;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr7Middlewares\Middleware\ResponseTime;
use Relay\RelayBuilder;

//Set a stream factory used by some middlewares
//(Required only if Zend\Diactoros\Stream is not detected)
\Psr7Middlewares\Middleware::setStreamFactory(function ($file, $mode) {
    return stream_for(fopen($file, $mode));
});

return (new RelayBuilder())->newInstance([
//    new \Psr7Middlewares\Middleware\TrailingSlash(),
    new RedirectMiddleware(),
    new ResponseTime(),

//    function(ServerRequestInterface $request, ResponseInterface $response, callable $next) {
//        /** @var ResponseInterface $response */
//        $response = $next($request, $response);
//        return $response->withHeader(Mindy::app()->http->csrf->getName(), Mindy::app()->http->csrf->getValue());
//    },

    new AjaxRedirect()
]);