import {
  drawingChainaMorning,
  drawingChinaAfternoon,
  drawingDaily,
  drawingDateEgypt,
  drawingDateEngland,
  drawingDateGermany,
  drawingDateHangsengAfternoon,
  drawingDateHangsengMorning,
  drawingDateHanoi,
  drawingDateIndia,
  drawingDateKorea,
  drawingDateLaos,
  drawingDateLottery,
  drawingDateMalaysia,
  drawingDateNikkeiAfternoon,
  drawingDateNikkeiMorning,
  drawingDateRussia,
  drawingDateSingapore,
  drawingDateStockAfternoon20,
  drawingDateStockEvening20,
  drawingDateStockMorning20,
  drawingDateTaiwan,
  drawingDateThai,
  drawingDownjone
} from 'repositories/models/drawingDate'
import to from 'utils/to'

const getPlayingScope = (category) => {
  const scope = {
    thai: drawingDateThai,
    laos: drawingDateLaos,
    lottery: drawingDateLottery,
    daily: drawingDaily,
    chinamorning: drawingChainaMorning,
    chinaafternoon: drawingChinaAfternoon,
    downjone: drawingDownjone,
    egypt: drawingDateEgypt,
    england: drawingDateEngland,
    germany: drawingDateGermany,
    hangsengmorning: drawingDateHangsengMorning,
    hangsengafternoon: drawingDateHangsengAfternoon,
    india: drawingDateIndia,
    korea: drawingDateKorea,
    malaysia: drawingDateMalaysia,
    nikkeimorning: drawingDateNikkeiMorning,
    nikkeiafternoon: drawingDateNikkeiAfternoon,
    russia: drawingDateRussia,
    singapore: drawingDateSingapore,
    taiwan: drawingDateTaiwan,
    stockmorning20: drawingDateStockMorning20,
    stockafternoon20: drawingDateStockAfternoon20,
    stockevening20: drawingDateStockEvening20,
    hanoi: drawingDateHanoi,
  }

  return scope[category] || ''
}

export const getAsyncDrawingDateByRequest = async (request = {}, user = {}) => {
  const { root_id: rootId } = user
  const { category = 'thai', drawing_date_id: drawingDateId, additional_attr: additionalAttr } = request
  const playingScope = getPlayingScope(category)

  if (!playingScope) {
    throw new Error(`DRAWING_DATE_ERROR: ${category} not exists`)
  }

  let drawingDate = []
  const scope = playingScope()
  if (drawingDateId) {
    drawingDate = await to(scope.findOne({ rootId }))
  } else {
    drawingDate = await to(scope.find({ rootId }))
  }

  if (scope.isGroup && drawingDate.length > 1 && additionalAttr) {
    drawingDate = await to(scope.current())
  }

  return drawingDate
}
