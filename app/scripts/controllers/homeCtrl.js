/**
 * Created by George Ruan on May 23, 2016.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
    'use strict';

    angular.module('nobe')
      .controller('HomeCtrl', homeCtrl);

      homeCtrl.$inject = ['$scope'];

      function homeCtrl($scope) {
        //new WOW().init();
      }
})();
