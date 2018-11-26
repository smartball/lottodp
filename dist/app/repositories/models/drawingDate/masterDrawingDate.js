'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../../database/models');

const withMasterDrawingDate = () => ({
  _isGroup: false,
  _nRound: 1,
  get isGroup() {
    return this._isGroup;
  },

  current(rootId) {
    return _models.DrawingDates.findOne({
      is_active: 1,
      root_id: rootId
    });
  },

  findOne(category, playingScope, rootId) {
    return _models.DrawingDates.findOne({
      category,
      playing_category: playingScope,
      root_id: rootId
    });
  }
});
exports.default = withMasterDrawingDate;