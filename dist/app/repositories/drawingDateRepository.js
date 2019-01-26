'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAsyncDrawingDateByRequest = undefined;

var _humps = require('humps');

var _drawingDate = require('./models/drawingDate');

var _to = require('../utils/to');

var _to2 = _interopRequireDefault(_to);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPlayingScope = category => {
  const scope = {
    thai: _drawingDate.drawingDateThai
    // laos: 'laos',
    // lottery: 'lottery',
    // daily: 'daily',
    // chinamorning: 'chinamorning',
    // chinaafternoon: 'chinaafternoon',
    // downjone: 'downjone',
    // egypt: 'egypt',
    // england: 'england',
    // germany: 'germany',
    // hangsengmorning: 'hangsengmorning',
    // hangsengafternoon: 'hangsengafternoon',
    // india: 'india',
    // korea: 'korea',
    // malaysia: 'malaysia',
    // nikkeimorning: 'nikkeimorning',
    // nikkeiafternoon: 'nikkeiafternoon',
    // russia: 'russia',
    // singapore: 'singapore',
    // taiwan: 'taiwan',
    // stockmorning20: 'stockmorning20',
    // stockafternoon20: 'stockafternoon20',
    // stockevening20: 'stockevening20',
    // hanoi: 'hanoi',
  };

  return scope[category] || '';
};

const getAsyncDrawingDateByRequest = exports.getAsyncDrawingDateByRequest = async (request = {}, user = {}) => {
  const { rootId } = user;
  const { category, drawingDateId, additionalAttr } = (0, _humps.camelizeKeys)(request);
  const playingScope = getPlayingScope(category);

  if (!playingScope) {
    throw new Error(`DRAWING_DATE_ERROR: ${category} not exists`);
  }

  let drawingDate;
  if (drawingDateId) {
    drawingDate = await (0, _to2.default)(playingScope().findOne({
      category,
      playing_category: playingScope,
      root_id: rootId
    }));
  } else {
    drawingDate = (0, _to2.default)(playingScope().find({
      playing_category: playingScope,
      root_id: rootId
    }));
  }

  if (playingScope.isGroup && drawingDate.length > 1 && additionalAttr) {
    drawingDate = await (0, _to2.default)(playingScope().current());
  }
};