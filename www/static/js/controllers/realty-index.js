app.controller('realtyIndexController', ['$scope', '$routeParams', 'blockUI', 'Cache',
    'NewLifeObject',
    'OldLifeObject',
    function ($scope, $routeParams, blockUI, Cache, NewLifeObject, OldLifeObject) {
        $scope.models = {};
        _.each({
            'NewLifeObject': NewLifeObject,
            'OldLifeObject': OldLifeObject
        }, function (model, name) {
            var blockedUI = blockUI.instances.get('realty-index-' + name.toLowerCase()),
                models = Cache.get('realty-index-' + name.toLowerCase());

            if (models) {
                $scope.models[name.toLowerCase()] = models;
            } else {
                blockedUI.start();
                model.query({pageSize: 4}, function (models) {
                    $scope.models[name.toLowerCase()] = models;
                    Cache.put('realty-index-' + name.toLowerCase(), models);
                    blockedUI.stop();
                });
            }
        });
    }
]);

app.controller('realtyListController', ['$scope', '$routeParams', '$location', 'blockUI', 'Cache',
    'NewLifeObject',
    'OldLifeObject',
    function ($scope, $routeParams, $location, blockUI, Cache, NewLifeObject, OldLifeObject) {
        var type = $routeParams.type;

        $scope.models = {};
        $scope.type = type;

        var prefixes = {
            'on': NewLifeObject,
            'oo': OldLifeObject
        };

        if (type in prefixes) {
            var model = prefixes[type],
                blockedUI = blockUI.instances.get('realty-list-' + type),
                models = Cache.get('realty-list-' + type);

            if (models) {
                $scope.models = models;
            } else {
                blockedUI.start();
                model.query(function (models) {
                    $scope.models = models;
                    Cache.put('realty-list-' + type, models);
                    blockedUI.stop();
                });
            }
        } else {
            $location.path("/");
        }
    }
]);

app.controller('realtyViewController', ['$scope', '$routeParams', '$location', 'blockUI', 'Cache',
    'NewLifeObject',
    'OldLifeObject',
    function ($scope, $routeParams, $location, blockUI, Cache, NewLifeObject, OldLifeObject) {
        var type = $routeParams.type,
            slug = $routeParams.slug,
            blockedUI = blockUI.instances.get('realty-view'),
            prefixes = {
                'on': NewLifeObject,
                'oo': OldLifeObject
            };

        if (type in prefixes) {
            var model = prefixes[type],
                instance = Cache.get('realty-' + type + '-' + slug);
            if (instance) {
                $scope.model = instance;
            } else {
                blockedUI.start();
                model.get({slug: slug}, function (instance) {
                    $scope.model = instance;
                    Cache.put('realty-' + type + '-' + slug, instance);
                    blockedUI.stop();
                });
            }
        } else {
            $location.path("/");
        }
    }
]);