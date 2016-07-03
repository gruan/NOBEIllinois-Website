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
      $scope.landingPageSection = {
        title: 'National Organization of Business and Engineering',
        description: 'Illinois Chapter'
      };
      $scope.missionSection = {
        title: 'Our Mission',
        statement: 'Our mission is to bring together individuals at corporate ' +
                   'and academic institutions interested in both business and ' +
                   'engineering and to integrate these fields into one ' +
                   'practice. NOBE will serve as a crossroad and network for ' +
                   'the unmet professional, leadership, technological and ' +
                   'entrepreneurial development of these individuals. As a ' +
                   'national organization, NOBE will maintain this network and ' +
                   'continually build resources to help these individuals meet ' +
                   'the constantly evolving demands they will face in today’s business world.'
      };
      $scope.committeeSection = {
        title: 'Committees',
        description: 'A variety of committees that promote direct member involvement ' +
                    'with the organization and community.',
        committees: [
          {
            title: 'External',
            description: 'Seek and establish company relationships.',
            iconClass: 'fa fa-search'
          },
          {
            title: 'Internal',
            description: 'Create mentorship programs between new and old members.',
            iconClass: 'fa fa-users'
          },
          {
            title: 'Tech',
            description: 'Develop the website, newsletter, resume book, and alumni database.',
            iconClass: 'fa fa-laptop'
          },
          {
            title: 'Finance',
            description: 'Deliver interactive finance presentations to our members.',
            iconClass: 'fa fa-pie-chart'
          },
          {
            title: 'Social',
            description: 'Organize member get togethers like bar crawls and barbecues.',
            iconClass: 'fa fa-beer'
          },
          {
            title: 'Fundraising',
            description: 'Plan and execute fundraising events',
            iconClass: 'fa fa-usd'
          },
          {
            title: 'Professional Development',
            description: 'Connect members with professionals.',
            iconClass: 'fa fa-industry'
          },
          {
            title: 'Case Competition',
            description: 'Create and host NOBE\'s annual case competition.',
            iconClass: 'fa fa-lightbulb-o'
          },
          {
            title: 'Marketing',
            description: 'Promote events through social media and our newsletter.',
            iconClass: 'fa fa-newspaper-o'
          },
          {
            title: 'Outreach',
            description: 'Build our EOH project and connect NOBE with community members.',
            iconClass: 'fa fa-tree'
          },
          {
            title: 'Junior Board',
            description: 'Form a new project under the mentorship of an executive member.',
            iconClass: 'fa fa-child'
          }
        ]
      };

      $scope.getCommitteeContainerClass = function(isLastElement, isIndexEven) {
        if (isLastElement && isIndexEven) {
          return 'col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6';
        }

        return 'col-sm-6 col-md-5 col-md-offset-1';
      };
    } // function homeCtrl
})();
