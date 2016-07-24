/**
 * Created by George Ruan on July 23, 2016.
 *
 * nobeChart defines the appearance and functionality of charts
 * in the nobe app.
 */

(function() {
  'use strict';

  angular.module('nobe')
    .directive('nobeChart', nobeChart);

  nobeChart.$inject = ['$compile'];
  function nobeChart($compile) {
    function _configureGlobalChartOptions() {
      Chart.defaults.global.colors = [
        '#4d4d4d', // Gray
        '#5da5da', // Blue
        '#faa43a', // Orange
        '#60bd68', // Green
        '#f17cb0', // Pink
        '#b2912f', // Brown
        '#b276B2', // Purple
        '#decf3f', // Yellow
        '#f15854' // Red
      ];
      Chart.defaults.global.defaultFontFamily = `'Open Sans', 'sans-serif'`;
      Chart.defaults.global.legend.display = true;
      Chart.defaults.global.legend.position = 'bottom';
      Chart.defaults.global.tooltips.titleSpacing = 0;
    }


    _configureGlobalChartOptions();

    var directive = {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
        labels: '=',
        options: '=',
        type: '='
      },
      templateUrl: 'scripts/directives/nobeChart/nobeChart.html'
    };

    return directive;

    function link(scope, element) {
      function _compileAngularChartDirectiveDynamically() {
        element[0].querySelector('canvas').className += ` ${scope.type}`;
        $compile(element.contents())(scope);
      }

      _compileAngularChartDirectiveDynamically();
    }
  }
})();
