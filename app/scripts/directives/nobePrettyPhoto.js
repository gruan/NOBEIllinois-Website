/**
 * Created by George Ruan on June 19, 2016.
 *
 * prettyPhoto is a directive that allows for the functionality of the
 * jQuery plugin `Pretty Photo` in Angular.
 */

(function () {
  'use strict';

  angular.module('nobe')
    .directive('nobePrettyPhoto', nobePrettyPhoto);

  // navBar.$inject = ['$scope'];

  function nobePrettyPhoto() {
    return {
      link: link,
      restrict: 'A'
    };

    function link(scope, element) {
      element.prettyPhoto({
        social_tools:false
      });
    }
  }
})();
