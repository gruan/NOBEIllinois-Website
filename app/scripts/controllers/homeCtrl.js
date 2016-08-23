/**
 * Created by George Ruan on May 23, 2016.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
    'use strict';

    angular.module('nobe')
      .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'nobeCommitteeData', 'nobeTeamData'];

    function homeCtrl($scope, nobeCommitteeData, nobeTeamData) {
      // ==================
      // Text
      // ==================
      $scope.committees = nobeCommitteeData.getActiveCommittees();
      $scope.teams = nobeTeamData.teams();

      $scope.sponsors = [
        'akuna_capital'
      ];

      $scope.memberData = [3, 1, 2, 5, 3, 2, 2, 1, 8];
      $scope.labels = [
        'Chemical Engineering',
        'Civil and Environment Engineering',
        'Computer Engineering',
        'Computer Science',
        'Finance',
        'General Engineering',
        'Industrial Engineering',
        'Materials Science and Engineering',
        'Mechanical Engineering'
      ];
      $scope.chartOptions = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var totalNumberOfMembers;
              function sumOfElements(array) {
                if (totalNumberOfMembers) {
                  return totalNumberOfMembers;
                }

                var sum = 0, i;
                for (i = 0; i < array.length; ++i) {
                  sum += array[i];
                }
                totalNumberOfMembers = sum;
                return sum;
              }

              var label = data.labels[tooltipItem.index];
              var percentage = Math.round(data.datasets[0].data[tooltipItem.index] / sumOfElements(data.datasets[0].data) * 100);
              return `${label}: ${percentage}%`;
            }
          }
        }
      };

      // ==================
      // Functions
      // ==================

      function getCommitteeContainerClass(isLastElement, isIndexEven) {
        if (isLastElement && isIndexEven) {
          return 'col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6';
        }

        return 'col-sm-6 col-md-5 col-md-offset-1';
      }

      function getTeamContainerClass(isLastElement, isIndexOdd) {
        var parity = $scope.teams.length % 3;

        switch (parity) {
        case 0:
          // Do nothing.
          break;
        case 1:
          if (isLastElement) {
            return 'col-md-offset-4 col-sm-offset-3';
          }
          break;
        case 2:
          if (!isIndexOdd) {
            return 'col-md-offset-2';
          }
          break;
        default:
          return '';
        }
      }

      function getSponsorAnimationDelay(index) {
        var delay = `${300 * (index + 1)}ms`;
        return delay;
      }

      // ==================
      // Public
      // ==================

      $scope.getCommitteeContainerClass = getCommitteeContainerClass;
      $scope.getTeamContainerClass = getTeamContainerClass;
      $scope.getSponsorAnimationDelay = getSponsorAnimationDelay;
    } // function homeCtrl
})();
