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
          controller: 'HomeCtrl',
          templateUrl: 'views/home.html'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
        })
        .when('/services', {
          templateUrl: 'views/services.html'
        })
        .when('/events', {
          templateUrl: 'views/events.html'
        })
        .when('/contact', {
          controller: 'ContactCtrl',
          templateUrl: 'views/contact.html'
        })
        .when('/404', {
          templateUrl: '404.html',
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
