import Tickets from '@models/tickets'
import logger from '@utils/logger'
import to from '@utils/to'
import { get } from 'lodash'

export default async (req, res, next) => {
  const category = get(req, 'query.category')
  const [err, data] = await to(Tickets.find({}))
  if (err) {
    res.json({ error: err })
  }

  logger.info(category)
  res.json({ data })
}
