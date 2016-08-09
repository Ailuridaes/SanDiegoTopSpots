(function(){
  var app = angular.module('app', ['topspotsFactory']);

  app.controller('TopspotsController', function(topspots){
    var ctrl = this;
    ctrl.topspots = [];
    topspots.list(function(topspots){
      ctrl.topspots = topspots;
    });

    ctrl.newSpot = {};

    ctrl.addTopspot = function() {
      ctrl.topspots.push(ctrl.newSpot);
      ctrl.newSpot = {};
    }
  });

})();
