import mongoose from 'mongoose'

const DrawingDateSchema = new mongoose.Schema({
  id: Number,
  user_id: Number,
  path: String,
  playing_type_name: String,
  drawing_date_id: Number,
  bill_id: Number,
  surrogate_key: Number,
  number: Number,
  amount: Number,
  commission: Number,
  compensation: Number,
  winning_ratio: Number,
  status: String,
  is_processed: Number,
  processed_at: Date,
  updated_by: Number,
  additional_attr: String,
  additional_attr2: String,
  deleted_at: Date,
  created_at: Date,
  updated_at: Date,
  affiliate: Number,
  over_amount: Number
}, {
  collection: 'drawing_dates'
})

export default mongoose.model('DrawingDate', DrawingDateSchema)
