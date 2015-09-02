'use strict';

/**
 * @ngdoc factory
 * @name minionatorNgApp.SlaveHealth
 * @description
 * # SlaveHealth
 * Factory in the minionatorNgApp.
 */

angular.module('minionatorNgApp')
  .factory('SlaveHealth', function ($resource) {
    var apiUrl = 'https://secure.pub.build.mozilla.org/builddata/reports/slave_health/json';
    return $resource(
      apiUrl,
      {
        id: '@_slaveclass'
      },
      {
        headers: {
          'Accept': 'application/json'
        },
        get: {
          url: apiUrl + '/:slaveclass.json'
        },
        query: {
          url: apiUrl + '/all_slaves.json',
          isArray: false
        },
        summary: {
          url: apiUrl + '/slave_state_rollup.json',
          isArray: false
        }
      }
    );
  });


  