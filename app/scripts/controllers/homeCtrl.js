/**
 * Created by George Ruan on May 23, 2016.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
    'use strict';

    angular.module('nobe')
      .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope) {
      // ==================
      // Text
      // ==================
      $scope.committees = [
        {
          name: 'External',
          description: 'Seek and establish company relationships.',
          iconClass: 'fa fa-search'
        },
        {
          name: 'Internal',
          description: 'Create mentorship programs between new and old members.',
          iconClass: 'fa fa-users'
        },
        {
          name: 'Tech',
          description: 'Develop the website, newsletter, resume book, and alumni database.',
          iconClass: 'fa fa-laptop'
        },
        {
          name: 'Finance',
          description: 'Deliver interactive finance presentations to our members.',
          iconClass: 'fa fa-pie-chart'
        },
        {
          name: 'Social',
          description: 'Organize social events like bar crawls and barbecues.',
          iconClass: 'fa fa-beer'
        },
        {
          name: 'Fundraising',
          description: 'Plan and execute fundraising events.',
          iconClass: 'fa fa-usd'
        },
        {
          name: 'Career Development',
          description: 'Connect members with professionals.',
          iconClass: 'fa fa-industry'
        },
        {
          name: 'Case Competition',
          description: 'Create and host NOBE\'s annual case competition.',
          iconClass: 'fa fa-lightbulb-o'
        },
        {
          name: 'Marketing',
          description: 'Promote events through social media and our newsletter.',
          iconClass: 'fa fa-newspaper-o'
        },
        {
          name: 'Outreach',
          description: 'Build our EOH project and connect NOBE with community members.',
          iconClass: 'fa fa-tree'
        },
        {
          name: 'Junior Board',
          description: 'Form a new project under the mentorship of an executive member.',
          iconClass: 'fa fa-child'
        }
      ];

      $scope.teams = [
        {
          name: 'Product Development',
          shortDescription: 'Brainstorm and create.',
          image: 'images/services/services1.png',
          imageAlt: '',
          description: 'Use this area to describe your project. Lorem ipsum ' +
                       'dolor sit amet, consectetur adipisicing elit. Est ' +
                       'blanditiis dolorem culpa incidunt minus dignissimos ' +
                       'deserunt repellat aperiam quasi sunt officia expedita ' +
                       'beatae cupiditate, maiores repudiandae, nostrum, ' +
                       'reiciendis facere nemo!'
        },
        {
          name: 'Case Competition',
          shortDescription: 'Compete in competitions.',
          image: 'images/services/services1.png',
          imageAlt: '',
          description: 'Use this area to describe your project. Lorem ipsum ' +
                       'dolor sit amet, consectetur adipisicing elit. Est ' +
                       'blanditiis dolorem culpa incidunt minus dignissimos ' +
                       'deserunt repellat aperiam quasi sunt officia expedita ' +
                       'beatae cupiditate, maiores repudiandae, nostrum, ' +
                       'reiciendis facere nemo!'
        }
      ];

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
        let parity = $scope.teams.length % 3;

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
        let delay = `${300 * (index + 1)}ms`;
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
