/**
 * Created by George Ruan on June 28, 2016.
 *
 * NationalCtrl defines the behavior of the National Page
 */

(function() {
  'use strict';

  angular.module('nobe')
    .controller('NationalCtrl', nationalCtrl);

  nationalCtrl.$inject = ['$scope', 'nobeChapterData'];

  function nationalCtrl($scope, nobeChapterData) {
      $scope.nobeChapterData = nobeChapterData;
  }

})();
