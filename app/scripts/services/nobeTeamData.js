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
        description: 'Have an interesting idea that you would like to implement or just want to create a product? Join the Product Development team to connect with likeminded individuals! As a member, you will have the form groups and implement a NOBE member\’s product idea. A NOBE officer will guide you through the process of creating a product from scratch to the finished project. Not only will NOBE provide the resources to help you get off the ground, but companies from research park will be invited to give critique and potentially sponsor you.'
      },
      {
        name: 'Case Competition',
        shortDescription: 'Compete in competitions.',
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: 'Connect with fellow members by joining NOBE\'s Case Competition team. As a member, you will engage with other students to train and improve your consulting and case competition skills. You will also have a chance to interact with consulting companies on an individual level, as they will be invited to provide tips and pointers. Equipped with newfound knowledge, represent NOBE by participating in case competitions at UIUC and other campuses across the region.'
      }
    ];


    var nobeTeamDataObj = {
      teams : function() { return _teams; }
    };

    return nobeTeamDataObj;
  }
})();
