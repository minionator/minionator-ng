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
      $scope.data = data;
    });
  });
