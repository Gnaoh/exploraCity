'use strict';

angular.module('exploraCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('place', {
        url: 'client/app/explore/place',
        templateUrl: 'app/explore/place/place.html',
        controller: 'PlaceCtrl'
      });
  });