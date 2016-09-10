/**
 * Created by George Ruan on July 16, 2016.
 */

(function() {
  'use strict';

  angular.module('nobe')
    .controller('OfficerCtrl', officerCtrl);

  officerCtrl.$inject = ['$scope', 'nobeOfficerData'];

  function officerCtrl($scope, nobeOfficerData) {
    $scope.roles = nobeOfficerData.getActiveRoles();
    $scope.getOfficerContainerClass = getOfficerContainerClass;

    function getOfficerContainerClass (isLastElement, index) {
      var containerClass = 'col-xs-12'

      // Handle spacing of last element for small size screen (when officer occupies 6 columns).
      containerClass = containerClass.concat(' col-sm-6');
      var parity = index % 2;
      if (isLastElement && parity == 0) {
        containerClass = containerClass.concat(' col-sm-offset-3');
      } else {
        containerClass = containerClass.concat(' col-sm-offset-0');
      }

      // Handle spacing of last element for medium size screen (when officer occupies 4 columns).
      containerClass = containerClass.concat(' col-md-4');
      var remainder = index % 3;

      if (isLastElement && remainder == 0) {
        containerClass = containerClass.concat(' col-md-offset-4');
      } else if (isLastElement && remainder == 1) {
        containerClass = containerClass.concat(' col-md-offset-2');
      } else {
        containerClass = containerClass.concat(' col-md-offset-0');
      }

      return containerClass;
    }
  }
})();
