import mongoose from 'mongoose'
import to from '../utils/to'
import {config} from '../config'

// const uri = 'mongodb+srv://cluster0-nb1ij.gcp.mongodb.net/test?retryWrites=true'
const { db } = config
const uri = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}`
const options = {
    useNewUrlParser: true
}

const createConnection = async () => {
    const [error, connection] = await to(mongoose.connect(uri, options))
    if (error) console.log('Error on create connection: ', error)

    return connection
}

export default createConnection()
