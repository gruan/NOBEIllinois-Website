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
        .when('/officers', {
          controller: 'OfficerCtrl',
          templateUrl: 'views/officers.html'
        })
        .when('/events', {
          templateUrl: 'views/events.html'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
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
    .run([function() {
      let wow = new WOW({live : true});
      wow.init();
    }]);
})();
