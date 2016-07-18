/**
 * Created by George Ruan on May 23, 2016.
 *
 * nobeImageCard defines the appearance of the image card seen in the website
 *
 */

(function() {
  'use strict';

  angular.module('nobe')
    .directive('nobeImageCard', nobeImageCard);

  function nobeImageCard() {
    var directive;

    directive = {
      link: link,
      restrict: 'E',
      scope: {
        color: '=',
        description: '=',
        link: '=',
        source: '='
      },
      templateUrl: 'scripts/directives/nobeImageCard/nobeImageCard.html'
    };

    return directive;
  }

  function link(scope) {
    const LIGHT_COLOR = '#f2f2f2';

    function _changeToChapterBorderColor() {
      _setBorderColor(scope.color);
    }

    function _changeToDefaultBorderColor() {
      _setBorderColor(LIGHT_COLOR);
    }

    function _setBorderColor(borderColor) {
      scope.imageCardStyle['border-color'] = borderColor;
    }

    scope.imageCardStyle = {
      'border-color': LIGHT_COLOR
    };

    scope.changeToChapterBorderColor = _changeToChapterBorderColor;
    scope.changeToDefaultBorderColor = _changeToDefaultBorderColor;
    scope.setBorderColor = _setBorderColor;
  }
})();
