app.factory('User', function ($resource) {
    return $resource('/api/users-user/c-auth', {}, {
        query: {
            method: 'GET',
            isArray: false
        },
        auth: {
            method: 'POST',
            isArray: false
        }
    });
});

app.service('AuthService', ['$cookies', '$http', '$q', 'notificationService', function ($cookies, $http, $q, notificationService) {
    var user;

    this.loginByCredentials = function (username, key) {
        var deferred = $q.defer();
        if (user) {
            return $q.when($user);
        } else {
            $http({
                url: '/api/users-user/c-auth',
                method: "POST",
                data: {
                    username: username,
                    key: key
                }
            }).then(function (response) {
                if(!response.data.status) {
                    notificationService.error("Failed auth");
                } else {
                    user = response.data;
                    deferred.resolve(user);
                }
            }, function (response) {
                deferred.reject(response.data);
            });

            return deferred.promise;
        }
    };

    this.loginByToken = function (token) {
        //            $http.defaults.headers.common['X-Token'] = token;
    };

    this.logout = function () {
        user = null;
    };
}
]);
