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
        name: 'Owen Flasch',
        linkedin: 'https://www.linkedin.com/in/owen-flasch-437066115/',
        active: true
      },
      'VP External': {
        name: 'Sanjit Narendra',
        linkedin: 'https://www.linkedin.com/in/sanjit-narendra-144918b2/',
        active: true
      },
      'VP Internal': {
        name: 'June Qian',
        linkedin: 'https://www.linkedin.com/in/june-qian-24125b108',
        active: true
      },
      'VP Special Operations': {
        name: 'Mrinaal Mittal',
        linkedin: 'https://www.linkedin.com/in/mrinaalmittal/',
        active: true
      },
      'Tech Chair': {
        name: 'Arsh Khandelwal',
        linkedin: 'https://www.linkedin.com/in/arshkhandelwal/',
        active: true
      },
      'Treasurer': {
        name: 'Rachel Lohmeyer',
        linkedin: 'https://www.linkedin.com/in/rachel-lohmeyer-609132a3',
        active: true
      },
      'Marketing Chair': {
        name: 'Shrey Maheshwari',
        linkedin: 'https://www.linkedin.com/in/shrey-maheshwari-b9aa44132/',
        active: true
      },
      'Finance Chair': {
        name: 'Anumay Mishra',
        linkedin: 'https://www.linkedin.com/in/anumay-mishra-40485b135/',
        active: true
      },
      'Social Chair': {
        name: 'Grant Culp',
        linkedin: 'https://www.linkedin.com/in/grantculp/',
        active: true
      },
      'Case Competition Chair\n': {
        name: 'Sanjit Narendra',
        linkedin: 'https://www.linkedin.com/in/sanjit-narendra-144918b2',
        active: true
      },
      'Junior Board': {
        name: 'Nikita Mandhan',
        linkedin: 'https://www.linkedin.com/in/nikita-mandhan-a9666112a',
        active: true
      },
      'Junior Board ': {
        name: 'Matthew Lee',
        linkedin: 'https://www.linkedin.com/in/matthew-lee-aa629b127',
        active: true
      },
      'Product Development Co-chair': {
        name: 'Rachel Burroughs',
        linkedin: 'https://www.linkedin.com/in/rachel-burroughs-3b4459103/',
        active: true
      },
      'Product Development Co-chair ': {
        name: 'Noah Horton',
        linkedin: 'https://www.linkedin.com/in/noah-horton-115a39126',
        active: true
      },
      'Test Officer': {
        name: 'Test User',
        linkedin: 'https://google.com',
        active: false
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
