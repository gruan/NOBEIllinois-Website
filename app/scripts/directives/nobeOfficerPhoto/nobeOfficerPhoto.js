/**
 * Created by George Ruan on May 16, 2016.
 *
 * nobeOfficerPhoto displays a photo of the officer along with their name,
 * role, and social media links.
 *
 */

(function() {
 'use strict';

 angular.module('nobe')
   .directive('nobeOfficerPhoto', nobeOfficerPhoto);

nobeOfficerPhoto.$inject = ['nobeOfficerData'];

 function nobeOfficerPhoto(nobeOfficerData) {
   var directive;

   directive = {
     link: link,
     restrict: 'E',
     scope: {
       role: '=',
       displayNameAndRole: '=',
       displaySocialMedia: '=',
     },
     templateUrl: 'scripts/directives/nobeOfficerPhoto/nobeOfficerPhoto.html'
   };

   return directive;

   function link(scope) {
     scope.nobeOfficerData = nobeOfficerData;
   }
 }
})();
