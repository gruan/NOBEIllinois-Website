/**
 * Created by George Ruan on July 16, 2016.
 */

(function() {
  'use strict';

  angular.module('nobe')
    .controller('OfficerCtrl', officerCtrl);

  officerCtrl.$inject = ['$scope'];

  function officerCtrl($scope) {
    // ==================
    // Text
    // ==================
    $scope.roles = [
      'President',
      'External Chair',
      'Internal Chair',
      'Tech Chair',
      'Finance Chair',
      'Social Chair',
      'Fundraising Chair',
      'Career Development Chair',
      'Case Competition Chair',
      'Marketing Chair',
      'Outreach Chair',
      'Junior Board'
    ];
  }

})();
