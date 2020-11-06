import checkObjectId from '../middleware/checkObjectId'
import express from 'express'
import * as DealersController from '../controllers/dealers'
const router = express.Router()

// POST /v1/api/dealers/single
router.post('/single', DealersController.saveDealer)

// POST /v1/api/dealers/bulk
router.post('/bulk', DealersController.saveDealers)

// GET /v1/api/dealers/:id
router.get('/:id', checkObjectId('id'), DealersController.getDelaerById)

// GET /v1/api/dealers/
router.get('/', DealersController.getAllDealers)

// DELETE /v1/api/dealers/:id
router.delete('/:id', checkObjectId('id'), DealersController.deleteById)

// PUT /v1/api/dealers/:id
router.put('/:id', checkObjectId('id'), DealersController.updateById)

export default router
