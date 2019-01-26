import { initUserCredit, updateUserCredit, tranferAffiliate, tranferAmount, summaryCompensate } from '../../../utils/functions'
import mongodb from 'mongodb'
import mongoose, { Schema } from 'mongoose'
import credit_timestamps from '../../../model/creditTimestamps.model'
import users from '../../../model/users.model'

export const handleAPI = async (data, res) => {
  configDatabase()
  let response = {}
  const userId = 1 // fig userId
  const getUser = await credit_timestamps.findOne({ user_id: data.data.user_id })
  const getMe = await users.findOne({ id: userId })
  if (data.method === 'initUserCredit') {
    const responseInit = initUserCredit(data.data.credit, getMe, getUser)
    const updateCredit = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseInit.user })
    const updateMe = await users.update({ id: userId }, { $set: responseInit.me })
    response = responseInit.message
  }
  else if (data.method === 'updateUserCredit') {
    const responseUpdateUserCredit = updateUserCredit(data.data.credit, data.data.myLoginName, getMe, getUser)
    console.log(responseUpdateUserCredit)
    const updateCredit = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseUpdateUserCredit.user })
    const updateMe = await users.update({ id: userId }, { $set: responseUpdateUserCredit.me })
    response = responseUpdateUserCredit.message
  }
  else if (data.method === 'tranferAffiliate') {
    const responseTranferAffiliate = tranferAffiliate(data.data.credit, getMe, getUser)
    const updateCredit = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseTranferAffiliate.user })
    const updateMe = await users.update({ id: userId }, { $set: responseTranferAffiliate.me })
    console.log(responseTranferAffiliate)
    response = responseTranferAffiliate.message
  }
  else if (data.method === 'tranferAmount') {
    const responseTranferAmount = tranferAmount(data.data.amount, getMe, getUser)
    const updateCredit = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseTranferAmount.user })
    const updateMe = await users.update({ id: userId }, { $set: responseTranferAmount.me })
    console.log(responseTranferAmount)
    response = responseTranferAmount.message
  }
  else if (data.method === 'summaryCompensate') {
    const responseSummaryCompensate = summaryCompensate(data.data.amount, getMe, getUser)
    const updateCredit = await credit_timestamps.update({ user_id: data.data.user_id }, { $set: responseSummaryCompensate.user })
    const updateMe = await users.update({ id: userId }, { $set: responseSummaryCompensate.me })
    console.log(responseSummaryCompensate)
    response = responseSummaryCompensate.message
  }
  else if(data.method === 'getUser'){
    const getMe = await users.findOne({ id: userId })
    console.log(getMe)
    response = getMe
  }
  else {
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
  const url = 'mongodb://root:ball1234@cluster0-shard-00-00-2bcwc.mongodb.net:27017,cluster0-shard-00-01-2bcwc.mongodb.net:27017,cluster0-shard-00-02-2bcwc.mongodb.net:27017/lotto?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
  try {
    mongoose.connect(url)
    mongoose.Promise = global.Promise
    const dbConnect = mongoose.connection
    dbConnect.on('connected', (ref) => {
      console.log('Connected to mongo server.')
    })
    return dbConnect
  } catch (err) {
    console.log('connect fail')
  }
}