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
    const FALLBACK_IMAGE = '/images/NOBE_Icon.png';
    const NOBE_ILLINOIS_LINKEDIN = 'https://www.linkedin.com/groups/8529699/profile';

    // Private
    const _officers = {
      'President': {
        name: 'Curt Olbrich',
        linkedin: 'https://www.linkedin.com/in/curtis-olbrich-348556b0'
      },
      'External Chair': {
        name: 'Veronika Sowers',
        linkedin: 'https://www.linkedin.com/in/veronika-sowers-b1a4949a'
      },
      'Internal Chair': {
        name: 'Owen Flasch',
        linkedin: 'https://www.linkedin.com/in/owen-flasch-437066115'
      },
      'Tech Chair': {
        name: 'George Ruan',
        linkedin: 'https://www.linkedin.com/in/gruan'
      },
      'Finance Chair': {
        name: 'Open Position',
        linkedin: ''
      },
      'Social Chair': {
        name: 'June Qian',
        linkedin: 'https://www.linkedin.com/in/june-qian-24125b108'
      },
      'Fundraising Chair': {
        name: 'Rachel Lohmeyer',
        linkedin: 'https://www.linkedin.com/in/rachel-lohmeyer-609132a3'
      },
      'Career Development Chair': {
        name: 'Open Position',
        linkedin: ''
      },
      'Case Competition Chair': {
        name: 'Sanjit Narendra',
        linkedin: 'https://www.linkedin.com/in/sanjit-narendra-144918b2'
      },
      'Marketing Chair': {
        name: 'Open Position',
        linkedin: ''
      },
      'Outreach Chair': {
        name: 'Saksham Dhingra',
        linkedin: 'https://www.linkedin.com/in/saksham-dhingra-179b87a8'
      },
      'Junior Board': {
        name: 'Open Position',
        linkedin: ''
      }
    };

    function _officerNameForRole(role) {
      return _officers[role].name;
    }

    function _officerLinkedInForRole(role) {
      if (_officers[role].linkedin.length > 0)
        return _officers[role].linkedin;

      return 'NOBE_ILLINOIS_LINKEDIN';
    }

    // FIXME: Dynamically check if a file exists...
    function _officerImageForRole(role) {
      let name;
      if (!role || !(name = _officers[role].name) || name === 'Open Position') {
        return FALLBACK_IMAGE;
      }

      let arrayOfNames = name.toLowerCase().split(' ');
      return `/images/officers/${arrayOfNames[0]}_${arrayOfNames[1]}.jpg`;
    }

    // Public
    let nobeOfficerDataObj = {
      officerNameForRole: _officerNameForRole,
      officerLinkedInForRole: _officerLinkedInForRole,
      officerImageForRole: _officerImageForRole
    };

    return nobeOfficerDataObj;
  }
})();
