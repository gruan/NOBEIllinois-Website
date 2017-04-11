/**
 * Created by George Ruan on May 23, 2016.
 *
 * nobeFooter defines the footer appearance and behavior
 *
 * To use: Put the directive into the html file.
 *
 * Ex. <nobe-footer></nobe-footer>
 */

(function() {
  'use strict';

  angular.module('nobe')
    .directive('nobeFooter', footer);

  // footer.$inject = ['$scope'];

  function footer() {
    var directive;

    directive = {
      link: link,
      restrict: 'E',
      scope: {

      },
      templateUrl: 'scripts/directives/nobeFooter/nobeFooter.html'
    };

    return directive;
  }

  function link(scope) {
    scope.copyrightYear = '2017';
  }
})();
