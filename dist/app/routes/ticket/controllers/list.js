'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tickets = require('../../../database/models/Tickets');

var _Tickets2 = _interopRequireDefault(_Tickets);

var _to = require('../../../utils/to');

var _to2 = _interopRequireDefault(_to);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res, next) => {
  const [err, data] = await (0, _to2.default)(_Tickets2.default.find({}));
  if (err) {
    res.json({ error: err });
  }

  res.json({ data });
};