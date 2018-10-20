import express from 'express'
import bill from './routes/bill'
import {HealthCheck} from './routes/helloworld'
import {config} from './config'

const app = express()

app.listen(config.port)
app.get('/', HealthCheck)
app.use('/api/bill', bill)
