(function(){
  angular.module('app', []);

  angular.module('app').controller('AppController', function($scope, $http){
    $http.get('topspots.json').success(function(data) {
      $scope.topspots = data;
    });

  });

})();
