app.factory('Developer', function($resource) {
    return $resource('/api/games-developer/:slug', {
        slug: '@slug'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('developerListController', ['$scope', '$routeParams', 'Developer', 'Cache', 'blockUI', 'PaginatonService',
    function($scope, $routeParams, Developer, Cache, blockUI, PaginatonService) {
        var gamesDevelopersUi = blockUI.instances.get('games-developers'),
            pager = PaginatonService.Pager({
                model: Developer,
                callback: function(models) {
                    $scope.models = models;
                    Cache.put('games-developers-' + pager.currentPage(), models);
                    gamesDevelopersUi.stop();
                }
            }),
            models = Cache.get('games-developers-' + pager.currentPage());
        $scope.pager = pager;
        if (models) {
            $scope.models = models;
        } else {
            gamesDevelopersUi.start();
            pager.query();

            $scope.$on('pagination:next', function(){
                pager.nextPage();
            });

            $scope.$on('pagination:prev', function(){
                pager.prevPage();
            });
        }
    }
]);

app.controller('developerViewController', ['$scope', '$routeParams', 'Developer', 'Game', 'Cache', 'blockUI',
    function($scope, $routeParams, Developer, Game, Cache, blockUI) {
        var gamesDeveloperViewUi = blockUI.instances.get('games-developers-view'),
            gamesDeveloperViewGamesUi = blockUI.instances.get('games-developers-view-games');
        var model = Cache.get('games-developers-' + $routeParams.slug);
        if (model) {
            $scope.model = model;
        } else {
            gamesDeveloperViewUi.start();
            Developer.get({
                slug: $routeParams.slug
            }, function(model) {
                $scope.model = model;
                Cache.put('games-developers-' + $routeParams.slug, model);
                gamesDeveloperViewUi.stop();
            });
        }

        var games = Cache.get('games-developers-' + $routeParams.slug + '-games');
        if (games) {
            $scope.games = games;
        } else {
            gamesDeveloperViewGamesUi.start();
            Game.query({
                developer__slug: $routeParams.slug
            }, function(games) {
                $scope.games = games;
                Cache.put('games-developers-' + $routeParams.slug + '-games', games);
                gamesDeveloperViewGamesUi.stop();
            });
        }
    }
]);
