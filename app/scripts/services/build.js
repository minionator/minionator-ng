'use strict';

/**
 * @ngdoc service
 * @name minionatorNgApp.Build
 * @description
 * # Build
 * Factory in the minionatorNgApp.
 */
angular.module('minionatorNgApp')
  .factory('Build', function ($resource) {
    var apiUrl = 'https://secure.pub.build.mozilla.org/buildapi/recent/:hostname?format=json&numbuilds=100&greedy=false';
    return $resource(
      apiUrl,
      {
        hostname: '@_hostname'
      },
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );
  });
