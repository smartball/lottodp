'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DrawingDateSchema = new _mongoose.Schema({
  id: {
    type: Number
  },
  user_id: {
    type: Number
  },
  path: {
    type: String
  },
  playing_type_name: {
    type: String
  },
  drawing_date_id: {
    type: Number
  },
  bill_id: {
    type: Number
  },
  surrogate_key: {
    type: Number
  },
  number: {
    type: Number
  },
  amount: {
    type: Number
  },
  commission: {
    type: Number
  },
  compensation: {
    type: Number
  },
  winning_ratio: {
    type: Number
  },
  status: {
    type: String
  },
  is_processed: {
    type: Number
  },
  processed_at: {
    type: Date
  },
  updated_by: {
    type: Number
  },
  additional_attr: {
    type: String
  },
  additional_attr2: {
    type: String
  },
  deleted_at: {
    type: Date
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  affiliate: {
    type: Number
  },
  over_amount: {
    type: Number
  }
}, {
  collection: 'drawing_dates'
});

exports.default = _mongoose2.default.model('DrawingDate', DrawingDateSchema);