app.factory('Patch', function($resource) {
    return $resource('/api/games-patch/:id', {
        id: '@id'
    }, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});

app.controller('patchListController', ['$scope', '$routeParams', 'Cache', 'Patch', 'blockUI',
    function($scope, $routeParams, Cache, Patch, blockUI) {
        var gamesPatchUi = blockUI.instances.get('games-patch-list');
        var model = Cache.get('games-patch-' + $routeParams.slug);
        if (model) {
            $scope.model = model;
        } else {
            gamesPatchUi.start();
            Patch.query({
                game__slug: $routeParams.slug
            }, function(model) {
                $scope.model = model;
                Cache.put('games-patch-' + $routeParams.slug, model);
                gamesPatchUi.stop();
            });
        }
    }
]);

app.controller('patchViewController', ['$scope', '$routeParams', 'Cache', 'Patch', 'blockUI',
    function($scope, $routeParams, Cache, Patch, blockUI) {
        var gamesPatchUi = blockUI.instances.get('games-patch');
        var model = Cache.get('games-patch-' + $routeParams.id);
        if (model) {
            $scope.model = model;
        } else {
            gamesPatchUi.start();
            Patch.get({
                id: $routeParams.id
            }, function(model) {
                $scope.model = model;
                Cache.put('games-patch-' + $routeParams.id, model);
                gamesPatchUi.stop();
            });
        }
    }
]);
