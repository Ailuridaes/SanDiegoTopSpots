angular.module('topspotsFactory', [])
       .factory('topspots', function($http){
  return {
    list: function(callback){
      $http({
        method: 'GET',
        url: '/topspots.json'
      }).success(callback);
    }
  };
});
