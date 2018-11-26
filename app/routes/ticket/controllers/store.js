import Tickets from 'database/models/Tickets'
import { get } from 'lodash'
import { getAsyncDrawingDateByRequest } from 'repositories/drawingDateRepository'
import logger from 'utils/logger'
import to from 'utils/to'

export default async (req, res, next) => {
  const category = get(req, 'query.category', '')
  const user = get(req, 'body.user', '')
  /**
   * Check drawing date
   */
  const [, drawingDate] = await getAsyncDrawingDateByRequest(req, user)
  console.log('DrawingDate', drawingDate)
  const [err, data] = await to(Tickets.find({}))
  if (err) {
    res.json({ error: err })
  }

  logger.info(category)
  res.json({ data })
}
