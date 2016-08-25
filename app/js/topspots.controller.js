(function() {
    'use strict';

    angular
        .module('app')
        .controller('TopspotsController', TopspotsController);

    TopspotsController.$inject = ['topspotsFactory'];

    /* @ngInject */
    function TopspotsController(topspotsFactory) {
        var vm = this;
        vm.topspots = [];
        vm.newSpot = {};

        activate();

        function activate() {
            topspotsFactory.list().then(
                function(topspots) {
                    vm.topspots = topspots;
                }
            );
        }

        vm.addTopspot = function() {
            vm.topspots.push(vm.newSpot);
            vm.newSpot = {};
        }
    }
})();
