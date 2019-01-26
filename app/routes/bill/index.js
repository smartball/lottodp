import express from 'express'
import { getBillById, deleteBill } from './controllers'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'bill page' })
})

router.get('/:id', getBillById)
router.delete('/', deleteBill)

export default router

