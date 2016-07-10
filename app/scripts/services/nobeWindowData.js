/**
 * Created by George Ruan on July 9, 2016.
 *
 * nobeWindowData is responsible for the data pertaining to the
 * current window that the user is on.
 */

(function() {
  'use strict';
  angular.module('nobe')
    .factory('nobeWindowData', nobeWindowData);

  function nobeWindowData() {
    // Private
    let _isModalOpen = false;
    let _currentActivePage = 'home';

    // Public
    let nobeWindowDataObj = {
      isModalOpen: function() { return _isModalOpen; },
      setIsModalOpen: function(newValue) { _isModalOpen = newValue; },
      currentActivePage: function() { return _currentActivePage; },
      setCurrentActivePage: function(newValue) { _currentActivePage = newValue; }
    };

    return nobeWindowDataObj;
  }
})();
