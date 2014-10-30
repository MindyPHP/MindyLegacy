app.factory('Game', function($resource) {
    return $resource('/api/games-game/:slug', {
        slug: '@slug'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('gamesListController', ['$scope', '$routeParams', 'Cache', 'Game', 'blockUI',
    function($scope, $routeParams, Cache, Game, blockUI) {
        $scope.layout = 'list';
        var gamesListUi = blockUI.instances.get('games-index');
        var games = Cache.get('games-index');
        if (games) {
            $scope.games = games;
        } else {
            gamesListUi.start();
            Game.query(function(games) {
                $scope.games = games;
                Cache.put('games-index', games);
                gamesListUi.stop();
            });
        }
    }
]);

app.controller('gamesViewController', ['$scope', '$routeParams', 'Cache', 'Game', 'Post', 'blockUI',
    function($scope, $routeParams, Cache, Game, Post, blockUI) {
        var gamesViewUi = blockUI.instances.get('games-view'),
            gamesPostsUi = blockUI.instances.get('games-posts');
        var model = Cache.get('games-' + $routeParams.slug);
        if (model) {
            $scope.model = model;
        } else {
            gamesViewUi.start();
            Game.get({
                slug: $routeParams.slug
            }, function(model) {
                $scope.model = model;
                Cache.put('games-' + $routeParams.slug, model);
                gamesViewUi.stop();
            });
        }

        var posts = Cache.get('games-' + $routeParams.slug + '-posts');
        if (posts) {
            $scope.posts = posts;
        } else {
            gamesPostsUi.start();
            Post.query({
                game__slug: $routeParams.slug
            }, function(posts) {
                $scope.posts = posts;
                Cache.put('games-' + $routeParams.slug + '-posts', posts);
                gamesPostsUi.stop();
            });
        }
    }
]);
