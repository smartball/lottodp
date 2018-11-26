'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _to = require('../utils/to');

var _to2 = _interopRequireDefault(_to);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const uri = 'mongodb+srv://cluster0-nb1ij.gcp.mongodb.net/test?retryWrites=true'
const { db } = _config.config;
const uri = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`;
const options = {
  useNewUrlParser: true
};

const createConnection = async () => {
  const [error, connection] = await (0, _to2.default)(_mongoose2.default.connect(uri, options));
  if (error) _logger2.default.error('Error on create connection: ', error.message);
  const { connections: [db] } = connection;
  const { host, port } = db;
  _logger2.default.info(`[ Connect database on ${host}:${port} ]`);
};

exports.default = createConnection;