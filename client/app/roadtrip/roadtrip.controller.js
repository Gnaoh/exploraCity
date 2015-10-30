'use strict';

angular.module('exploraCityApp')
  .controller('RoadtripCtrl', function ($scope, $timeout) {

  $scope.drivingMode = false; 
  $scope.drivingSpeed = 0; 
  $scope.driverMode = true;

  $scope.origin = "225 Bush Street, San Francisco, CA";
  $scope.destination = "661 Howard St, San Francisco, CA 94105";

  var map;
  var updateFrequency = 1*1000; 
  var savedPath = null; 


  var overviewPath=[]; 
  var overviewPathIndex=0;  


  var detailedPath=[];
  var detailedPathIndex=0;  

  var directionsService = new google.maps.DirectionsService();


  var driveOverviewPaths = function() {
    var op1, op2;

    if (detailedPath.length > detailedPathIndex) { 
      driveDetailedPaths(); 
    }
    else { 
      op1 = overviewPath[overviewPathIndex];
      op2 = overviewPath[overviewPathIndex+1];
      overviewPathIndex += 1;
      if (op1 && op2) {
        var request ={origin:op1, destination:op2, travelMode: 'DRIVING'};
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            detailedPath = response.routes[0].overview_path;
            console.log('Updated detailedPath for overviewpath between',
              overviewPathIndex, 'and', overviewPathIndex+1,
              'with', detailedPath.length, 'geo points');
            detailedPathIndex = 0;
            driveOverviewPaths();
          } 
        });
      }
    } 
  };


  var driveDetailedPaths = function() {
    var meter = Math.floor(
      (parseInt($scope.drivingSpeed, 10) * 1000) / 3600 
      * (updateFrequency/1000));                      
    var point1 = detailedPath[detailedPathIndex];
    var point2 = detailedPath[detailedPathIndex+1];

    if (point1 && point2) {
     
      var heading = google.maps.geometry.spherical.computeHeading(point1, point2);
      var distance = google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
      var totalCount = parseInt(distance / meter, 10) || 1;

      var drive = function(count, position) {
        console.log(overviewPathIndex + '/' + overviewPath.length, 
          detailedPathIndex + '/' + detailedPath.length, 
          count + '/' + totalCount, 'distance', meter);
        if (totalCount >= count) {
          $timeout( function() {
            var pov = map.getStreetView().getPov();
            if ($scope.driverMode) {
              map.setHeading(heading);
              pov.heading = heading;
            }

            map.getStreetView().setPosition(position);
            map.getStreetView().setPov(pov);
            map.getStreetView().setVisible(true);

            var distanceToPoint2 = google.maps.geometry.spherical.computeDistanceBetween(position, point2);
            var nextPosition = distanceToPoint2 < meter ? 
              point2 : google.maps.geometry.spherical.computeOffset(position, meter, heading);
            if ($scope.drivingMode) {
              drive(++count, nextPosition);
            } else {
              savedPath = {count: count, position: position};
              return false;
            }
          }, updateFrequency);
        } else {
          detailedPathIndex += 1;
          $scope.$emit('driveOverviewPath');
        } 
      };

      var count = (savedPath && savedPath.count) || 1;
      var position = (savedPath && savedPath.position) || point1;
      savedPath = null;
      drive(count, position);

    } else {
      detailedPathIndex += 1;
      $scope.$emit('driveOverviewPath');
    }
  };

  $scope.$on('driveOverviewPath', function() { 
    driveOverviewPaths();
  });

  $scope.drive = function() {
    $scope.drivingMode = !$scope.drivingMode;
    if ($scope.drivingMode) {
      map.setZoom(16);
      if (savedPath) {
        driveDetailedPaths();
      } else {
        $scope.$emit('driveOverviewPath');
      }
    }
  };

  $scope.directionsChanged = function() {
    overviewPath = this.directions.routes[0].overview_path; 
    console.log('direction is changed', 'got overviewPath with', overviewPath.length, 'points');
    map.getStreetView().setPosition(overviewPath[0]);

    overviewPathIndex = 0;
    detailedPathIndex = 0;
    $scope.drivingMode = false;  
    toContinue = null;   
  }

  $scope.$on('mapInitialized', function(e, _map_) {
    map = _map_;
    window.map = map;
  });

});
