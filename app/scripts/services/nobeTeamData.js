/**
 * Created by George Ruan on August 23, 2016.
 *
 * nobeTeamData contains static information on the various teams.
 */

(function() {
  'use strict';
  angular.module('nobe')
    .factory('nobeTeamData', nobeTeamData);

  function nobeTeamData() {
    var _teams = [
      {
        name: 'Product Development',
        shortDescription: 'Brainstorm and create.',
        image: '/images/services/services1.png',
        imageAlt: 'Product Development Photo',
        description: 'Work with the team to develop a product from start to finish through the semester while learning about design stages and marketing and commercialization strategies. Build skills in design thinking and innovation, while simultaneously improving your leadership and communication.'
      },
      {
        name: 'Business/Case Analysis Team',
        shortDescription: 'Compete in competitions.',
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: ' Come together in discussion of topics like corporate development, management and technology consulting, venture capital, and industry management. Gain experience tackling real-world problems through case chains, and have a chance to contribute to NOBE\'s own case competition.'
      },
      {
        name: 'Company Consulting Teams',
        shortDescription: 'Compete in competitions.',
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: 'Join a team to tackle a problem presented by a company from research park over a period of 1-2 months. Work with members of different disciplines to propose a holistic solution to a real-world situation. Gain access to industry leaders and build your network.'
      },
      {
        name: 'Tech Team',
        shortDescription: 'Compete in competitions.',
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: 'Work with the tech chair to build NOBE\'s technology infrastructure. Also, develop and apply skills in various projects throughout the semester.'
      },
      {
        name: 'Social and Marketing Team',
        shortDescription: 'Compete in competitions.',
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: 'Work with the social and marketing chairs to build our brand and grow NOBE\'s presence on campus through publicity and outreach.'
      }

    ];


    var nobeTeamDataObj = {
      teams : function() { return _teams; }
    };

    return nobeTeamDataObj;
  }
})();
