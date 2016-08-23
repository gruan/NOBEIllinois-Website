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
        image: '/images/services/services1.png',
        imageAlt: 'Case Competition Photo',
        description: 'Use this area to describe your project. Lorem ipsum ' +
                     'dolor sit amet, consectetur adipisicing elit. Est ' +
                     'blanditiis dolorem culpa incidunt minus dignissimos ' +
                     'deserunt repellat aperiam quasi sunt officia expedita ' +
                     'beatae cupiditate, maiores repudiandae, nostrum, ' +
                     'reiciendis facere nemo!'
      }
    ];


    var nobeTeamDataObj = {
      teams : function() { return _teams; }
    };

    return nobeTeamDataObj;
  }
})();
