import mongoose from 'mongoose'

const Ticket = new mongoose.Schema({
    id: {
        type: Number
    },
    bill_id: {
        type: Number
    },
    number: {
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
    },
    winning_ratio: {
        type: Number
    },
    surrogate_key: {
        type: String
    }
})

export default Ticket
