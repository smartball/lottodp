import mongoose from 'mongoose'
import { config } from '../config'
import logger from '../utils/logger'
import to from '../utils/to'

// const uri = 'mongodb+srv://cluster0-nb1ij.gcp.mongodb.net/test?retryWrites=true'
const { db } = config
const uri = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`
const options = {
  useNewUrlParser: true
}

const createConnection = async () => {
  const [error, connection] = await to(mongoose.connect(uri, options))
  if (error) logger.error('Error on create connection: ', error.message)
  const { connections: [db] } = connection
  const { host, port } = db
  logger.info(`[ Connect database on ${host}:${port} ]`)
}

export default createConnection
