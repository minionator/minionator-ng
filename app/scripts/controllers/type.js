'use strict';

/**
 * @ngdoc function
 * @name minionatorNgApp.controller:TypeCtrl
 * @description
 * # TypeCtrl
 * Controller of the minionatorNgApp
 */
angular.module('minionatorNgApp')
  .controller('TypeCtrl', function ($scope, $routeParams, SlaveHealth) {
    $scope.class = $routeParams.class;
    $scope.slavetype = $routeParams.type;
    SlaveHealth.classtype({classtype: $routeParams.class + '-' + $routeParams.type}, function (data) {
      $scope.states = {
        working: 0,
        idle: 0,
        broken: 0,
        disabled: 0,
        staging: 0,
        decommissioned: 0,
        not_in_slavealloc: 0
      };
      for (var key in data) {
        if (data[key].slave_state) {
          $scope.states[data[key].slave_state] += 1;
        }
      }
      $scope.data = data;
    });
  });
