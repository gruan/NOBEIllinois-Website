(function() {
  'use strict';
  var express = require('express');
  var app = express();

  app.use(express.static('app'));

  // ===================
  // Node_Modules Routes
  // ===================

  app.use('/scripts/angular', express.static(__dirname + '/node_modules/angular/'));
  app.use('/scripts/angular-chart', express.static(__dirname + '/node_modules/angular-chart.js/dist/'));
  app.use('/scripts/angular-route', express.static(__dirname + '/node_modules/angular-route/'));
  app.use('/scripts/chart', express.static(__dirname + '/node_modules/chart.js/dist/'));
  app.use('/scripts/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
  app.use('/scripts/lodash', express.static(__dirname + '/node_modules/lodash'));
  app.use('/scripts/wow', express.static(__dirname + '/node_modules/wowjs/dist'));

  app.use('/styles/animate', express.static(__dirname + '/node_modules/wowjs/css/libs'));
  app.use('/styles/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
  app.use('/styles/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
  });

  var port = 8080;
  app.listen(port, function () {
    console.log('Listening on port %d', port);
  });
})();
