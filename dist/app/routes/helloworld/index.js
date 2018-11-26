'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _healthCheck = require('./health-check');

Object.defineProperty(exports, 'healthCheck', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_healthCheck).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }