'use strict';

angular.module('exploraCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: 'app/map/map.html',
        controller: 'MapCtrl'
      })

      .state('newMap', {
        url: '/map/new',
        templateUrl: 'app/map/map.new.html',
        controller: 'MapCtrl'
      })

      .state('newEdit', {
        url: '/map/edit',
        templateUrl: 'app/map/edit.new.html',
        controller: 'MapCtrl'
      })

  });