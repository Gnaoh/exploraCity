'use strict';

angular.module('exploraCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('roadtrip', {
        url: '/roadtrip',
        templateUrl: 'app/roadtrip/roadtrip.html',
        controller: 'RoadtripCtrl'
      });
  });