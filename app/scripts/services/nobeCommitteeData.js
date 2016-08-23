/**
 * Created by George Ruan on August 23, 2016.
 *
 * nobeCommitteeData contains static information on the various committees.
 */

(function() {
  'use strict';
  angular.module('nobe')
    .factory('nobeCommitteeData', nobeCommitteeData);

  function nobeCommitteeData() {
    var _committees = [
      {
        name: 'External',
        description: 'Seek and establish company relationships.',
        iconClass: 'fa fa-search',
        active: false
      },
      {
        name: 'Internal',
        description: 'Create mentorship programs between new and old members.',
        iconClass: 'fa fa-users',
        active: false
      },
      {
        name: 'Tech',
        description: 'Develop the website, newsletter, resume book, and alumni database.',
        iconClass: 'fa fa-laptop',
        active: true
      },
      {
        name: 'Finance',
        description: 'Deliver interactive finance presentations to our members.',
        iconClass: 'fa fa-pie-chart',
        active: false
      },
      {
        name: 'Social & Marketing',
        description: 'Organize and market events through social media and our newsletter.',
        iconClass: 'fa fa-newspaper-o',
        active: true
      },
      {
        name: 'Fundraising',
        description: 'Plan and execute fundraising events.',
        iconClass: 'fa fa-usd',
        active: false
      },
      {
        name: 'Career Development',
        description: 'Connect members with professionals.',
        iconClass: 'fa fa-industry',
        active: false
      },
      {
        name: 'Case Competition',
        description: 'Create and host NOBE\'s annual case competition.',
        iconClass: 'fa fa-lightbulb-o',
        active: true
      },
      {
        name: 'Outreach',
        description: 'Build our EOH project and connect NOBE with community members.',
        iconClass: 'fa fa-tree',
        active: false
      },
      {
        name: 'Junior Board',
        description: 'Form a new project under the mentorship of an executive member.',
        iconClass: 'fa fa-child',
        active: true
      }
    ];

    function getActiveCommittees() {
      var activeCommittees = [];
      for (var i = 0; i < _committees.length; ++i) {
        if (_committees[i].active) {
          activeCommittees.push(_committees[i]);
        }
      }
      return activeCommittees;
    }

    // Public
    var nobeCommitteeDataObj = {
      getActiveCommittees: getActiveCommittees
    };

    return nobeCommitteeDataObj;
  }
})();
