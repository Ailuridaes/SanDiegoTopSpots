(function() {
    'use strict';

    angular
        .module('app')
        .factory('topspotsFactory', topspotsFactory);

    topspotsFactory.$inject = ['$http'];

    /* @ngInject */
    function topspotsFactory($http) {
        var service = {
            list: listTopspots,
            add: addTopspot
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

        function addTopspot(topspot) {
            return $http({
                method: 'POST',
                url: 'http://localhost:50041/api/topspots',
                data: topspot
            }).then(function(response){
                return angular.fromJson(response.data);
            }, function(response){
                return response.data;
            });
        }
    }
})();
