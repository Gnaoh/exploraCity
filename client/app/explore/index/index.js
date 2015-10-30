'use strict';

angular.module('exploraCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/explore',
        templateUrl: 'app/explore/index/index.html',
        controller: 'IndexCtrl'
      });
  });