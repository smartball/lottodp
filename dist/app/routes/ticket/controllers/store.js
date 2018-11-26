'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _Tickets = require('../../../database/models/Tickets');

var _Tickets2 = _interopRequireDefault(_Tickets);

var _drawingDateRepository = require('../../../repositories/drawingDateRepository');

var _logger = require('../../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _to = require('../../../utils/to');

var _to2 = _interopRequireDefault(_to);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res, next) => {
  const category = (0, _lodash.get)(req, 'query.category', '');
  const user = (0, _lodash.get)(req, 'body.user', '');
  /**
   * Check drawing date
   */
  const drawingDate = (0, _drawingDateRepository.getAsyncDrawingDateByRequest)(req, user);
  console.log('DrawingDate', drawingDate);
  const [err, data] = await (0, _to2.default)(_Tickets2.default.find({}));
  if (err) {
    res.json({ error: err });
  }

  _logger2.default.info(category);
  res.json({ data });
};