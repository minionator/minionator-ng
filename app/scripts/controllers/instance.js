'use strict';

/**
 * @ngdoc function
 * @name minionatorNgApp.controller:InstanceCtrl
 * @description
 * # InstanceCtrl
 * Controller of the minionatorNgApp
 */
angular.module('minionatorNgApp')
  .controller('InstanceCtrl', function ($scope, $routeParams) {
    $scope.class = $routeParams.class;
    $scope.slavetype = $routeParams.type;
    $scope.instanceName = $routeParams.instance;
  });
