import mongoose, { Schema } from "mongoose"

const summary = new Schema({
    id: Number,
    user_id: Number,
    path: String,
    ticket_id: Number,
    playing_type_name: String,
    drawing_date_id: Number,
    bill_id: Number,
    number: Number,
    send_amount: Number,
    own_amount: Number,
    receive_amount: Number,
    commission_expense: Number,
    commission_income: Number,
    compensation: Number,
    net_amount: Number,
    compensation_income: Number,
    compensation_expense: Number,
    wining_ratio_inc: Number,
    wining_ratio_exp: Number,
    commission: Number,
    share: Number,
    quota_balance: Number,
    is_processed: Number,
    processed_at: String,
    updated_by: Number,
    deleted_at: String,
    created_at: String,
    updated_at: String,
    additional_attr: String,
    additional_attr2: String
})

module.exports = mongoose.model('summary', summary)