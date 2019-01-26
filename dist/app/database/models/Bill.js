'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Bill = new _mongoose2.default.Schema({
    id: Number,
    user_id: Number,
    path: String,
    playing_category: String,
    drawing_date_id: Number,
    amount: Number,
    commission: Number,
    compensation: Number,
    deleted_at: Date,
    created_at: Date,
    updated_at: Date,
    remark: String
});

exports.default = Bill;