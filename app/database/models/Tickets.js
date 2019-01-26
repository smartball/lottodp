import mongoose, { Schema } from 'mongoose'

const TicketSchema = new Schema({
  id: {
    type: Number
  },
  user_id: {
    type: Number
  },
  path: {
    type: String
  },
  playing_type_name: {
    type: String
  },
  drawing_date_id: {
    type: Number
  },
  bill_id: {
    type: Number
  },
  surrogate_key: {
    type: Number
  },
  number: {
    type: Number
  },
  amount: {
    type: Schema.Types.Decimal128
  },
  commission: {
    type: Schema.Types.Decimal128
  },
  compensation: {
    type: Schema.Types.Decimal128
  },
  winning_ratio: {
    type: Schema.Types.Decimal128
  },
  status: {
    type: String,
    enum: ['lose', 'win', 'unknown', 'canceled']
  },
  is_processed: {
    type: Number
  },
  processed_at: {
    type: Date
  },
  updated_by: {
    type: Number
  },
  additional_attr: {
    type: String
  },
  additional_attr2: {
    type: String
  },
  deleted_at: {
    type: Date,
    default: Date.now
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  affiliate: {
    type: Schema.Types.Decimal128
  },
  over_amount: {
    type: Schema.Types.Decimal128
  }
}, {
  collection: 'tickets'
})

export default mongoose.model('Ticket', TicketSchema)
