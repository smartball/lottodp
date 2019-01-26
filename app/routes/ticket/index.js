import express from 'express'
import { list, store } from './controllers'

const router = express.Router()

router.get('/', list)
router.post('/', store)

export default router

