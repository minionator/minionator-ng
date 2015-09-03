'use strict';

/**
 * @ngdoc function
 * @name minionatorNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minionatorNgApp
 */
angular.module('minionatorNgApp')
  .controller('MainCtrl', function ($scope, $routeParams, SlaveHealth) {
    if ($routeParams.class) {
      $scope.slaveclass = $routeParams.class;
    }
    SlaveHealth.summary({}, function (summary) {
      $scope.summary = summary;
    });
  });
