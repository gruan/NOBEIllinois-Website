(function() {
  'use strict';
  var express = require('express');
  var app = express();
  var fs = require('fs');

  app.use(express.static('app'));

  // ===================
  // Node_Modules Routes
  // ===================
  app.use('/angular-chart', express.static(__dirname + '/node_modules/angular-chart.js/dist'));
  app.use('/chart', express.static(__dirname + '/node_modules/chart.js/dist'));

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
  });

  var port = 8080;
  app.listen(port, function () {
    console.log('Listening on port %d', port);
  });
})();
