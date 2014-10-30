app.factory('Publisher', function($resource) {
    return $resource('/api/games-publisher/:slug', {
        slug: '@slug'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('publisherListController', ['$scope', '$routeParams', 'Publisher', 'blockUI', 'Cache',
    function($scope, $routeParams, Publisher, blockUI, Cache) {
        var gamesPublisherUI = blockUI.instances.get('games-publishers');
        var models = Cache.get('games-publishers');
        if (models) {
            $scope.models = models;
        } else {
            gamesPublisherUI.start();
            Publisher.query(function(models) {
                $scope.models = models;
                Cache.put('games-publishers', models);
                gamesPublisherUI.stop();
            });
        }
    }
]);

app.controller('publisherViewController', ['$scope', '$routeParams', 'Publisher', 'Game', 'blockUI', 'Cache',
    function($scope, $routeParams, Publisher, Game, blockUI, Cache) {
        var gamesPublisherViewUI = blockUI.instances.get('games-publisher-view'),
            gamesPublisherViewGamesUI = blockUI.instances.get('games-publisher-view-games');
        var model = Cache.get('games-publishers-' + $routeParams.slug);
        if (model) {
            $scope.model = model;
        } else {
            gamesPublisherViewUI.start();
            Publisher.get({
                slug: $routeParams.slug
            }, function(model) {
                $scope.model = model;
                Cache.put('games-publishers-' + $routeParams.slug, model);
                gamesPublisherViewUI.stop();
            });
        }

        var games = Cache.get('games-publishers-' + $routeParams.slug + '-games');
        if (games) {
            $scope.games = games;
        } else {
            gamesPublisherViewGamesUI.start();
            Game.query({
                publisher__slug: $routeParams.slug
            }, function(games) {
                $scope.games = games;
                Cache.put('games-publishers-' + $routeParams.slug + '-games', games);
                gamesPublisherViewGamesUI.stop();
            });
        }
    }
]);
