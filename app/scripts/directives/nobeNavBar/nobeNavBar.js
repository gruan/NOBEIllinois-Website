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

  navBar.$inject = ['$rootScope', 'nobeWindowData', 'WindowEnum'];
  function navBar($rootScope, nobeWindowData, WindowEnum) {
    var directive;

    directive = {
      link: link,
      restrict: 'E',
      scope: {

      },
      templateUrl: 'scripts/directives/nobeNavBar/nobeNavBar.html'
    };

    return directive;

    function link(scope) {
      $rootScope.$on('$routeChangeSuccess', function() {
        scope.activePage = nobeWindowData.currentActivePage();
      });

      scope.facebook = 'https://www.facebook.com/groups/nobeillinois/';
      scope.twitter = 'https://twitter.com/nobeillinois?lang=en';
      scope.linkedin = 'https://www.linkedin.com/';

      scope.WindowEnum = WindowEnum;
    }
  }
})();
