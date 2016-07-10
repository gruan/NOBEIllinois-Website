/**
 * Created by George Ruan on July 9, 2016.
 *
 * BodyCtrl changes properties of the body HTML element.
 */

(function() {
  'use strict';

  angular.module('nobe')
    .controller('BodyCtrl', bodyCtrl);

  bodyCtrl.$inject = ['$scope', 'nobeWindowData'];

  function bodyCtrl($scope, nobeWindowData) {
    $scope.isModalOpen = nobeWindowData.isModalOpen;
  }

})();
