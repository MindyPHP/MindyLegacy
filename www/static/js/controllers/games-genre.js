app.factory('Genre', function($resource) {
    return $resource('/api/games-genre/:slug', {
        slug: '@slug'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('genreListController', ['$scope', '$routeParams', 'Cache', 'Genre', 'blockUI',
    function($scope, $routeParams, Cache, Genre, blockUI) {
        var gamesGenreUi = blockUI.instances.get('games-genres');
        var models = Cache.get('games-genre');
        if (models) {
            $scope.models = models;
        } else {
            gamesGenreUi.start();
            Genre.query(function(models) {
                $scope.models = models;
                Cache.put('games-genre', models);
                gamesGenreUi.stop();
            });
        }
    }
]);

app.controller('genreViewController', ['$scope', '$routeParams', 'Genre', 'Game', 'Cache', 'blockUI',
    function($scope, $routeParams, Genre, Game, Cache, blockUI) {
        var gamesGenreViewUi = blockUI.instances.get('games-genre-view'),
            gamesGenreViewGamesUi = blockUI.instances.get('games-genre-view-games');
        var model = Cache.get('games-genre-' + $routeParams.slug);
        if (model) {
            $scope.model = model;
        } else {
            gamesGenreViewUi.start();
            Genre.get({
                slug: $routeParams.slug
            }, function(model) {
                $scope.model = model;
                Cache.put('games-genre-' + $routeParams.slug, model);
                gamesGenreViewUi.stop();
            });
        }

        var games = Cache.get('games-list-genre-' + $routeParams.slug);
        if (games) {
            $scope.games = games;
        } else {
            gamesGenreViewGamesUi.start();
            Game.query({
                genre__slug: $routeParams.slug
            }, function(games) {
                $scope.games = games;
                Cache.put('games-list-genre-' + $routeParams.slug, games);
                gamesGenreViewGamesUi.stop();
            });
        }
    }
]);
