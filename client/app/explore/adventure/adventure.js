'use strict';

angular.module('exploraCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adventure', {
        url: '/explore/adventure',
        templateUrl: 'app/explore/adventure/adventure.html',
        controller: 'AdventureCtrl'
      })
      
      .state('newAdventure', {
        url: '/explore/adventure/new',
        templateUrl: 'app/explore/adventure/adventure.new.html',
        controller: 'AdventureCtrl' 
      })
  });