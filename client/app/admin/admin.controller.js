'use strict';

angular.module('exploraCityApp')
  .controller('AdminCtrl', function($scope, Auth, User, Modal) {

    $scope.users = User.query();

    $scope.delete = Modal.confirm.delete(function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    });
  });