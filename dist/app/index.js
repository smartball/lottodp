'use strict';

var _bill = require('./routes/bill');

var _bill2 = _interopRequireDefault(_bill);

var _helloworld = require('./routes/helloworld');

var _ticket = require('./routes/ticket');

var _ticket2 = _interopRequireDefault(_ticket);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _connection = require('./database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _auth = require('./middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const middleware = [(0, _cors2.default)(), _bodyParser2.default.urlencoded({ extended: false }), _bodyParser2.default.json(), _auth2.default];

app.use(middleware);
app.listen(_config.config.port, error => {
  if (error) {
    _logger2.default.error(error);
    process.exit(1);
  }
  (0, _connection2.default)();
});

app.get('/', _helloworld.healthCheck);
app.use('/api/bill', _bill2.default);
app.use('/api/ticket', _ticket2.default);