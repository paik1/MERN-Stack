import { validateObjectId } from '../middleware/validators'
import express from 'express'
import * as DealersController from '../controllers/dealers'
import validateToken from '../middleware/authenticaton'

const router = express.Router()

router.param('dealerId', validateObjectId)

// POST /v1/api/dealers/single
router.post('/single', validateToken, DealersController.saveDealer)

// POST /v1/api/dealers/bulk
router.post('/bulk', validateToken, DealersController.saveDealers)

// GET /v1/api/dealers/:dealerId
router.get('/:dealerId', validateToken, DealersController.getDelaerById)

// GET /v1/api/dealers/
router.get('/', validateToken, DealersController.getAllDealers)

// DELETE /v1/api/dealers/:dealerId
router.delete('/:dealerId', validateToken, DealersController.deleteById)

// PUT /v1/api/dealers/:dealerId
router.put('/:dealerId', validateToken, DealersController.updateById)

export default router
