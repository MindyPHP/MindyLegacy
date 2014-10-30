app.factory('Mod', function ($resource) {
    return $resource('/api/games-mod/:id', {id: '@id'}, {
        query: {method: 'GET', isArray: false}
    });
});

app.controller('modListController', ['$scope', '$routeParams', 'Cache', 'Mod', 'blockUI', function ($scope, $routeParams, Cache, Mod, blockUI) {
    var gamesModUi = blockUI.instances.get('games-mod-list');
    var model = Cache.get('games-mod-' + $routeParams.slug);
    if (model) {
        $scope.model = model;
    } else {
        gamesModUi.start();
        Mod.query({game__slug: $routeParams.slug}, function (model) {
            $scope.model = model;
            Cache.put('games-mod-' + $routeParams.slug, model);
            gamesModUi.stop();
        });
    }
}]);

app.controller('modViewController', ['$scope', '$routeParams', 'Cache', 'Mod', 'blockUI', function ($scope, $routeParams, Cache, Mod, blockUI) {
    var gamesModUi = blockUI.instances.get('games-mod');
    var model = Cache.get('games-mod-' + $routeParams.id);
    if (model) {
        $scope.model = model;
    } else {
        gamesModUi.start();
        Mod.get({id: $routeParams.id}, function (model) {
            $scope.model = model;
            Cache.put('games-mod-' + $routeParams.id, model);
            gamesModUi.stop();
        });
    }
}]);