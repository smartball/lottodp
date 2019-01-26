import mongoose, { Schema } from "mongoose"

const credit_timestamps = new Schema({
    id: Number,
    user_id: Number,
    init_credit: Number,
    remaining_credit: Number,
    child_credit: Number,
    bet: Number,
    own_amount: Number,
    recieve_amount: Number,
    send_amount: Number,
    created_at: String,
    updated_at: String
})

module.exports = mongoose.model('credit_timestamps', credit_timestamps)