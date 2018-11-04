import Tickets from '@models/tickets'
import to from '@utils/to'

export default async (req, res, next) => {
  const [err, data] = await to(Tickets.find({}))
  if (err) {
    res.json({ error: err })
  }

  res.json({ data })
}
