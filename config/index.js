const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });

const ENVIRONMENT = process.env.NODE_ENV || 'development';

const configFile = `./${ENVIRONMENT}`;

const isObject = variable => {
  return variable instanceof Object;
};

/*
 * Deep copy of source object into tarjet object.
 * It does not overwrite properties.
*/
const assignObject = (target, source) => {
  if (target && isObject(target) && source && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(target, key)) {
        target[key] = source[key];
      } else {
        assignObject(target[key], source[key]);
      }
    });
    return target;
  }
};

const config = {
  common: {
    port: process.env.NODE_API_PORT
  }
};

const customConfig = require(configFile).config;
module.exports = assignObject(customConfig, config);