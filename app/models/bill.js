import mongoose from 'mongoose'

const Bill = new mongoose.Schema({
    id: {
        type: Number
    },
    user_id: {
        type: Number
    },
    amount: {
        type: Number
    },
    commission: {
        type: Number
    },
    compensation: {
        type: Number
    }
})

export default Bill
