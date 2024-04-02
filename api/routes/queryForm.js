import express from 'express'
import { getQueryFormDetails } from '../controllers/queryFormController.js'

const router = express.Router()

router.post('/queryform',getQueryFormDetails)
export default router