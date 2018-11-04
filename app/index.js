import bill from '@routes/bill'
import { healthCheck } from '@routes/helloworld'
import ticket from '@routes/ticket'
import logger from '@utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { config } from './config'
import createConnection from './database/connection'
import auth from './middlewares/auth'

const app = express()
const middleware = [
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  auth
]

app.use(middleware)
app.listen(config.port, (error) => {
  if (error) {
    logger.error(error)
    process.exit(1)
  }
  createConnection()
})

app.get('/', healthCheck)
app.use('/api/bill', bill)
app.use('/api/ticket', ticket)
