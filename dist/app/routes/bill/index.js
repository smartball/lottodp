'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('./controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'bill page' });
});

router.get('/:id', _controllers.getBillById);
router.delete('/', _controllers.deleteBill);

exports.default = router;