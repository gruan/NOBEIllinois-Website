/**
 * Created by George Ruan on May 22, 2016.
 *
 * Defines the routing behavior for the web application.
 */

(function() {
  'use strict';

  angular
    .module('nobe', ['ngRoute'])  // Set up app dependencies
    .config(function($routeProvider) {
      // Define Routes
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/404', {
          templateUrl: '404.html',
        })
        .when('', {
          redirectTo: '/'
        })
        .otherwise({
          redirectTo: '/404'
        });
    })
    .run(['$rootScope', function($rootScope) {
      let wow = new WOW({live : true});
      wow.init();
    }]);
})();
