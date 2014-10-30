var app = angular.module('App', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'templates',
    'blockUI',
    'ui.notify',
    'ngDialog',
    'mm.foundation'
]);

app.config([
    '$routeProvider',
    '$locationProvider',
    'blockUIConfig',
    'notificationServiceProvider',
    function ($routeProvider, $locationProvider, blockUIConfig, notificationServiceProvider) {
        $routeProvider.
            when("/", {
                templateUrl: "realty/index.html",
                controller: "realtyIndexController"
            }).
//            when("/t/:type", {
//                templateUrl: "realty/list.html",
//                controller: "realtyListController"
//            }).
//            when("/:type-:slug", {
//                templateUrl: "realty/view.html",
//                controller: "realtyViewController"
//            }).
            when("/games/", {
                templateUrl: "games/game/index.html",
                controller: "gamesListController"
            }).
            when("/games/game/:slug", {
                templateUrl: "games/game/view.html",
                controller: "gamesViewController"
            }).
            when("/games/game/:slug/post/:url", {
                templateUrl: "games/blog/view.html",
                controller: "blogViewController"
            }).

            when("/games/game/:slug/patch", {
                templateUrl: "games/patch/list.html",
                controller: "patchListController"
            }).
            when("/games/game/:slug/patch/:id", {
                templateUrl: "games/patch/view.html",
                controller: "patchViewController"
            }).

            when("/games/game/:slug/mod", {
                templateUrl: "games/mod/list.html",
                controller: "modListController"
            }).
            when("/games/game/:slug/mod/:id", {
                templateUrl: "games/mod/view.html",
                controller: "modViewController"
            }).

            when("/games/genre", {
                templateUrl: "games/genre/list.html",
                controller: "genreListController"
            }).
            when("/games/genre/:slug", {
                templateUrl: "games/genre/view.html",
                controller: "genreViewController"
            }).

            when("/games/developers", {
                templateUrl: "games/developer/list.html",
                controller: "developerListController"
            }).
            when("/games/developers/:slug", {
                templateUrl: "games/developer/view.html",
                controller: "developerViewController"
            }).

            when("/games/publishers", {
                templateUrl: "games/publisher/list.html",
                controller: "publisherListController"
            }).
            when("/games/publishers/:slug", {
                templateUrl: "games/publisher/view.html",
                controller: "publisherViewController"
            }).

            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        blockUIConfig.message = 'Загрузка...';
        blockUIConfig.delay = 0;

        notificationServiceProvider.setDefaults({
            history: false,
            delay: 40000,
            closer: true,
            closer_hover: true
        });
    }
]);

app.factory('Cache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('Cache');
}]);

app.factory('PaginatonService', function ($rootScope) {
    return {
        Pager: function (model) {
            return new Pager(model, $rootScope);
        }
    };
});

app.filter('rawHtml', ['$sce', function($sce){
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);
