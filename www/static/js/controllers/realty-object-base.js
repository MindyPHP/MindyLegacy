var realtyModels = [
    'NewLifeObject',
    'OldLifeObject'
];

var createRealtyModel = function(resourceName) {
    app.factory(resourceName, function ($resource) {
        return $resource('/api/realty-' + resourceName.toLowerCase() + '/:slug', {
            slug: '@slug'
        }, {
            query: {
                method: 'GET',
                isArray: false
            }
        });
    });
};

_.each(realtyModels, function(name) {
    createRealtyModel(name);
});