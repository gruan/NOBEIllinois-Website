/**
 * Created by George Ruan on July 16, 2016.
 *
 * nobeOfficerData contains static information on the NOBE officers.
 */

(function() {
  'use strict';
  angular.module('nobe')
    .factory('nobeOfficerData', nobeOfficerData);

  function nobeOfficerData() {
    // Constants
    var FALLBACK_IMAGE = '/images/NOBE_Icon.png';
    var NOBE_ILLINOIS_LINKEDIN = 'https://www.linkedin.com/groups/8529699/profile';

    // Private
    var _officers = {
      'President': {
        name: 'Curt Olbrich',
        linkedin: 'https://www.linkedin.com/in/curtis-olbrich-348556b0',
        active: true
      },
      'External Chair': {
        name: 'Veronika Sowers',
        linkedin: 'https://www.linkedin.com/in/veronika-sowers-b1a4949a',
        active: true
      },
      'Internal Chair': {
        name: 'Owen Flasch',
        linkedin: 'https://www.linkedin.com/in/owen-flasch-437066115',
        active: true
      },
      'Tech Chair': {
        name: 'George Ruan',
        linkedin: 'https://www.linkedin.com/in/gruan',
        active: true
      },
      'Finance Chair': {
        name: 'Mrinaal Mittal',
        linkedin: 'https://in.linkedin.com/in/mrinaalmittal',
        active: true
      },
      'Social Chair': {
        name: 'June Qian',
        linkedin: 'https://www.linkedin.com/in/june-qian-24125b108',
        active: true
      },
      'Fundraising Chair': {
        name: 'Rachel Lohmeyer',
        linkedin: 'https://www.linkedin.com/in/rachel-lohmeyer-609132a3',
        active: true
      },
      'Career Development Chair': {
        name: 'Open Position',
        linkedin: '',
        active: false
      },
      'Case Competition Chair': {
        name: 'Sanjit Narendra',
        linkedin: 'https://www.linkedin.com/in/sanjit-narendra-144918b2',
        active: true
      },
      'Outreach Chair': {
        name: 'Saksham Dhingra',
        linkedin: 'https://www.linkedin.com/in/saksham-dhingra-179b87a8',
        active: true
      },
      'Junior Board': {
        name: 'Jackie Chen',
        linkedin: 'https://www.linkedin.com/in/jackiebchen',
        active: true
      }
    };

    function _officerNameForRole(role) {
      return _officers[role].name;
    }

    function _officerLinkedInForRole(role) {
      if (_officers[role].linkedin.length > 0) {
        return _officers[role].linkedin;
      }

      return NOBE_ILLINOIS_LINKEDIN;
    }

    // FIXME: Dynamically check if an image exists...
    function _officerImageForRole(role) {
      var name;
      if (!role || !(name = _officers[role].name) || name === 'Open Position') {
        return FALLBACK_IMAGE;
      }

      var arrayOfNames = name.toLowerCase().split(' ');
      return `/images/officers/${arrayOfNames[0]}_${arrayOfNames[1]}.jpg`;
    }

    // FIXME: fix dis.
    function _getActiveRoles() {
      var activeRoles = [];
      var properties = Object.getOwnPropertyNames(_officers);
      for (var i = 0; i < properties.length; ++i) {
        if (_officers.hasOwnProperty(properties[i]) && _officers[properties[i]].active) {
          activeRoles.push(properties[i]);
        }
      }
      return activeRoles;
    }

    // Public
    var nobeOfficerDataObj = {
      officerNameForRole: _officerNameForRole,
      officerLinkedInForRole: _officerLinkedInForRole,
      officerImageForRole: _officerImageForRole,
      getActiveRoles: _getActiveRoles
    };

    return nobeOfficerDataObj;
  }
})();
