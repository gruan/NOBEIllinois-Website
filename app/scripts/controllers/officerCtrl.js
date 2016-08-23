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

    function getOfficerContainerClass (isLastElement, isIndexEven) {
        if (isLastElement && isIndexEven) {
          return 'col-xs-offset-0 col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4';
        }

        return 'col-xs-12 col-sm-6 col-md-4';
    }
  }
})();
