import mongoose from 'mongoose'

const Bill = new mongoose.Schema({
    id: Number,
    user_id: Number,
    path: String,
    playing_category: String,
    drawing_date_id: Number,
    amount: Number,
    commission: Number,
    compensation: Number,
    deleted_at: Date,
    created_at: Date,
    updated_at: Date,
    remark: String
})

export default Bill
