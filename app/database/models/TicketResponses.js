import mongoose, { Schema } from 'mongoose'

const TicketResponseSchema = new Schema({
  id: {
    type: Number
  },
  bill_id: {
    type: Number
  },
  ticket_id: {
    type: Number
  },
  playing_type: {
    type: String
  },
  number: {
    type: String
  },
  amount: {
    type: Schema.Types.Decimal128
  },
  over_amount: {
    type: Schema.Types.Decimal128
  },
  error: {
    type: String
  },
  error_type: {
    type: String
  },
  additional_attr: {
    type: Number
  },
  successful: {
    type: Number
  },
  message: {
    type: String,
    enum: ['waiting', 'processing', 'accepted', 'fail']
  },
  status: {
    type: String
  },
  process_at: {
    type: Date
  },
  random_key: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  collections: 'ticket_response'
})

export default mongoose.model('TicketResponse', TicketResponseSchema)
