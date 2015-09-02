'use strict';

/**
 * @ngdoc function
 * @name minionatorNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minionatorNgApp
 */
angular.module('minionatorNgApp')
  .controller('MainCtrl', function ($scope, SlaveHealth) {
    SlaveHealth.summary({}, function (summary) {
      $scope.summary = summary;
    });
  });
