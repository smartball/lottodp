'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TicketResponseSchema = new _mongoose.Schema({
  id: {
    type: Number
  },
  bill_id: {
    type: Number
  },
  ticket_id: {
    type: Number
  },
  playing_type: {
    type: String
  },
  number: {
    type: String
  },
  amount: {
    type: _mongoose.Schema.Types.Decimal128
  },
  over_amount: {
    type: _mongoose.Schema.Types.Decimal128
  },
  error: {
    type: String
  },
  error_type: {
    type: String
  },
  additional_attr: {
    type: Number
  },
  successful: {
    type: Number
  },
  message: {
    type: String,
    enum: ['waiting', 'processing', 'accepted', 'fail']
  },
  status: {
    type: String
  },
  process_at: {
    type: Date
  },
  random_key: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  collections: 'ticket_response'
});

exports.default = _mongoose2.default.model('TicketResponse', TicketResponseSchema);