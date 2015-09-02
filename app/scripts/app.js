'use strict';

/**
 * @ngdoc overview
 * @name minionatorNgApp
 * @description
 * # minionatorNgApp
 *
 * Main module of the application.
 */
angular
  .module('minionatorNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:class/:type', {
        templateUrl: 'views/type.html',
        controller: 'TypeCtrl',
        controllerAs: 'type'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
