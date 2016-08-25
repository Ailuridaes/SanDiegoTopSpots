(function() {
    'use strict';

    angular
        .module('app')
        .factory('topspotsFactory', topspotsFactory);

    topspotsFactory.$inject = ['$http'];

    /* @ngInject */
    function topspotsFactory($http) {
        var service = {
            list: listTopspots
        };

        return service;

        function listTopspots() {
            return $http({
                method: 'GET',
                url: 'http://localhost:50041/api/topspots'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }
    }
})();
