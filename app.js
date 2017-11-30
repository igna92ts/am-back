const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser')
  routes = require('./app/routes'),
  errors = require('./app/middlewares/errors')
  config = require('./config');


const app = express();
app.use(cors())
const port = config.common.port || 8080;
routes.setRoutes(app);
app.use(errors.handle);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(port);
console.log(`Listening on port: ${port}`);

module.exports = app;
