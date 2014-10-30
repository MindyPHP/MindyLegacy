app.factory('Post', function($resource) {
    return $resource('/api/games-post/:url', {
        id: '@url'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('blogViewController', ['$scope', '$routeParams', 'Cache', 'Game', 'Post', 'blockUI',
    function($scope, $routeParams, Cache, Game, Post, blockUI) {
        var gamesPostViewUI = blockUI.instances.get('games-post-view'),
            gamesPostViewGameUI = blockUI.instances.get('games-post-view-game');
        var post = Cache.get('games-' + $routeParams.slug + '-post-' + $routeParams.url);
        if (post) {
            $scope.post = post;
        } else {
            gamesPostViewUI.start();
            Post.get({
                url: $routeParams.url
            }, function(post) {
                $scope.post = post;
                Cache.put('games-' + $routeParams.slug + '-post-' + $routeParams.url, post);
                gamesPostViewUI.stop();
            });
        }

        var game = Cache.get('games-' + $routeParams.slug);
        if (game) {
            $scope.game = game;
        } else {
            gamesPostViewGameUI.start();
            Game.get({
                slug: $routeParams.slug
            }, function(game) {
                $scope.game = game;
                Cache.put('games-' + $routeParams.slug, game);
                gamesPostViewGameUI.stop();
            });
        }
    }
]);
