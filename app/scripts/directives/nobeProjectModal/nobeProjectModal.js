/**
 * Created by George Ruan on July 3, 2016.
 *
 * nobeProjectModal defines the appearance and functionality of
 * the project modal.
 */

(function() {
  'use strict';

  angular.module('nobe')
    .directive('nobeProjectModal', nobeProjectModal);

  nobeProjectModal.$inject = ['$timeout', 'nobeWindowData'];

  function nobeProjectModal($timeout, nobeWindowData) {
    var directive;

    directive = {
      link: link,
      restrict: 'E',
      scope: {
        team: '='
      },
      templateUrl: 'scripts/directives/nobeProjectModal/nobeProjectModal.html'
    };

    return directive;

    function link(scope) {
      let isCurrentModalOpen = false;

      function isModalOpen() {
        return isCurrentModalOpen;
      }

      function openModal() {
        isCurrentModalOpen = true;
        nobeWindowData.setIsModalOpen(true);
      }

      function closeModal() {
        isCurrentModalOpen = false;
        nobeWindowData.setIsModalOpen(false);
      }

      // ==================
      // Variables
      // ==================
      scope.isModalOpen = isModalOpen;

      // ==================
      // Functions
      // ==================
      scope.closeModal = closeModal;
      scope.openModal = openModal;
    }
  }
})();
