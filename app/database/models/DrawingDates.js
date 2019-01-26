import mongoose, { Schema } from 'mongoose'

const DrawingDateSchema = new Schema({
  id: {
    type: Number
  },
  date: {
    type: Date
  },
  is_active: {
    type: Number
  },
  switch_on_at: {
    type: Date
  },
  switch_off_at: {
    type: Date
  },
  round: {
    type: Number
  },
  group: {
    type: Number
  },
  next_drawing_date_id: {
    type: Number
  },
  processing_percentage: {
    type: Number
  },
  playing_category: {
    type: String
  },
  root_id: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  is_precessed: {
    type: Number
  },
  is_halted: {
    type: Date
  }
}, {
  collection: 'drawing_dates'
})

export default mongoose.model('DrawingDate', DrawingDateSchema)
