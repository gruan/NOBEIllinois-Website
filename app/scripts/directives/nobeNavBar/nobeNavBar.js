/**
 * Created by George Ruan on May 23, 2016.
 *
 * nobeNavBar defines the navigation bar appearance and functionality.
 *
 * To use: Put the directive into the html file.
 *
 * Ex. <nobe-nav-bar></nobe-nav-bar>
 */

(function() {
  'use strict';

  angular.module('nobe')
    .directive('nobeNavBar', navBar);

  // navBar.$inject = ['$scope'];

  function navBar() {
    var directive;

    directive = {
      link: link,
      templateUrl: 'scripts/directives/nobeNavBar/nobeNavBar.html',
      restrict: 'E',
      scope: {

      }
    };

    return directive;

    function link(scope) {
      scope.facebook = 'https://www.facebook.com/groups/nobeillinois/';
      scope.twitter = 'https://twitter.com/nobeillinois?lang=en';
      scope.linkedin = 'https://www.linkedin.com/';

      // FIXME: Defines highlighted tab in the navigation bar
      scope.activePage = {
        home      : {active: false},
        about     : {active: false},
        services  : {active: false},
        events    : {active: false},
        contact   : {active: false}
      };
    }
  }
})();
