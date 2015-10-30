'use strict';

angular.module('exploraCityApp').factory('Adventure',['$resource',
	function ($resource) {
  		return $resource('/api/adventures/:id', { id: '@_id' 
  		}, {
  			update: {
  				method: 'PUT'
  			}
  		});
  }	
]);
