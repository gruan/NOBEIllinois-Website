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

  angular.module('nobe')
    .constant('WindowEnum', {
      Home: 'home',
      Officers: 'officers',
      Events: 'events',
      Points: 'points',
      National: 'national',
      Contact: 'contact'
    });

  nobeWindowData.$inject = ['$rootScope', 'WindowEnum'];
  function nobeWindowData($rootScope, WindowEnum) {
    // Private
    var _isModalOpen = false;
    var _currentActivePage = WindowEnum.Home;

    function _onRouteChangeNavBar() {
      // loadedTemplateUrl has the format views/[page].html
      $rootScope.$on('$routeChangeSuccess', function(event, next) {
        if (!next.loadedTemplateUrl) {
          return;
        }

        var page = next.loadedTemplateUrl.split('.')[0].split('/')[1];
        _currentActivePage = page;
      });
    }

    // Public
    var nobeWindowDataObj = {
      isModalOpen: function() { return _isModalOpen; },
      setIsModalOpen: function(newValue) { _isModalOpen = newValue; },
      currentActivePage: function() { return _currentActivePage; },
      setCurrentActivePage: function(newValue) { _currentActivePage = newValue; }
    };

    _onRouteChangeNavBar();
    return nobeWindowDataObj;
  }
})();
