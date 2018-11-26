'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./');

var _pipe = require('../../../utils/pipe');

var _withConstructor = require('../../../utils/withConstructor');

const withDrawingDateThai = () => ({
  category: 'thai'
});

const drawingDateThai = () => (0, _pipe.pipe)(withDrawingDateThai, _.withMasterDrawingDate, (0, _withConstructor.withConstructor)(drawingDateThai))({});
exports.default = drawingDateThai;