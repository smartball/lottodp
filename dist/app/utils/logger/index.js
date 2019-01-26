'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let logger;

if (_config.config.stage === 'develop') {
  logger = console;
} else {
  const papertrailTransport = new _winston2.default.transports.Papertrail({
    host: _config.config.host,
    port: _config.config.port
  });

  logger = new _winston2.default.Logger({
    transports: [papertrailTransport]
  });
}

exports.default = logger;