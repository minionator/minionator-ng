'use strict';

/**
 * @ngdoc function
 * @name minionatorNgApp.controller:InstanceCtrl
 * @description
 * # InstanceCtrl
 * Controller of the minionatorNgApp
 */
angular.module('minionatorNgApp')
  .controller('InstanceCtrl', function ($scope, $routeParams, Build) {
    if ($routeParams.class) {
      $scope.slaveclass = $routeParams.class;
    }
    if ($routeParams.type) {
      $scope.slavetype = $routeParams.type;
    }
    if ($routeParams.instance) {
      $scope.instanceName = $routeParams.instance;
      Build.query({hostname: $routeParams.instance}, function (builds) {
        $scope.builds = builds;
      });
    }
  });