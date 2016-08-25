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

        activate();

        function activate() {
            topspotsFactory.list().then(
                function(topspots) {
                    vm.topspots = topspots;
                }
            );
        }

        vm.addTopspot = function(newSpot) {
            // transpose to new topspot object so location will be an array
            var topspot = {
                name : newSpot.name,
                description : newSpot.description,
                location: [vm.newSpot.location[0], vm.newSpot.location[1]]
            };

            topspotsFactory.add(topspot).then(
                // wait until response OK to add to list
                function(topspot) {
                    vm.topspots.push(topspot);
                }
            );
        }
    }
})();
