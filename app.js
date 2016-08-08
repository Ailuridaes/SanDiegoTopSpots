(function(){
  var app = angular.module('app', ['topspotsFactory']);

  app.controller('TopspotsController', function(topspots){
    var ctrl = this;
    ctrl.topspots = [];
    topspots.list(function(topspots){
      ctrl.topspots = topspots.data;
    });
  });

})();
