import { initUserCredit } from '../../../utils/functions'
import mongodb from 'mongodb'
import mongoose, { Schema } from 'mongoose'
import credit_timestamps from '../../../model/creditTimestamps.model'
import users from '../../../model/users.model'

export const handleAPI = async (data, res) => {
  configDatabase()
  let response = {}
  const userId = 1 // fig userId
  if (data.method === 'initUserCredit') {
    const getUser = await credit_timestamps.findOne({ user_id: data.data.user_id })
    const getMe = await users.findOne({ id: userId })
    const responseInit = initUserCredit(data.data.credit, getMe, getUser)
    const updateDB = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseInit.user })
    response = responseInit.message
  } else {
    response = {
      transaction_id: 123,
      data: {},
      statusCode: 200,
      successful: false,
      message: 'Missing method'
    }
  }
  return response
}

const configDatabase = () => {
  const url = 'mongodb://localhost:27017/lotto'
  try {
    mongoose.connect(url)
    mongoose.Promise = global.Promise
    const dbConnect = mongoose.connection
    dbConnect.on('connected', (ref) => {
      console.log('Connected to mongo server.');
      //trying to get collection names
      // databaseConnect.db.collection("users", function (err, collection) {
      //   collection.find({ bet: 1916 }).toArray(function (err, data) {
      //     console.log(data[0].parent_id); // it will print your collection data
      //   })
      //   // collection.update({ "parent_id": 3 }, { $set: { "parent_id": 4 } }, (err, data) => {
      //   //   console.log(data)
      //   // })
      // });
    })
    return dbConnect
  } catch (err) {
    console.log('connect fail')
  }
}