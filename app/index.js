import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import billController from 'routes/bill'
import { healthCheck } from 'routes/helloworld'
import ticketController from 'routes/ticket'
import creditController from 'routes/credit'
import logger from 'utils/logger'
import { config } from './config'
import createConnection from './database/connection'
import auth from './middlewares/auth'

const app = express()
const middleware = [
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  // auth
]

app.use(middleware)
app.listen(3001, (error) => {
  if (error) {
    // logger.error(error)
    process.exit(1)
  }
  createConnection()
})

app.get('/', healthCheck)
app.use('/api/bill', billController)
app.use('/api/ticket', ticketController)
app.use('/api/credit', creditController)
