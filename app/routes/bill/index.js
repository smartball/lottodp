import express from 'express'
import getBillById from './getBillById'
import deleteBill from './deleteBill'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'bill page' })
})

router.get('/:id', getBillById)
router.delete('/', deleteBill)

export default router

