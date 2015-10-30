'use strict';

angular.module('exploraCityApp')
  .controller('AdventureCtrl', function ($scope, $location, Adventure, Auth) {

  Adventure.query(
    function(data) {
      $scope.adventures = data
    }
  );

  $scope.adventure = {};
  $scope.createAdventure = function() {
    Adventure.save($scope.adventure,
      function(data){
        $scope.adventure.push(data);
      },
      function(data) {
        alert("Uh oh, ran into some technical issues...When in doubt, rake the routes");
      }
    );
    $scope.adventure = {};
  }

  $scope.deleteAdventure = function(adventure) {
    Adventure.delete({id: adventure._id});
    var index = $scope.adventures.indexOf(adventure)
    $scope.adventures.splice(index, 1);
  }
});
