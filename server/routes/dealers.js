import checkObjectId from '../middleware/checkObjectId'
import express from 'express'
import * as DealersController from '../controllers/dealers'
import validateToken from '../middleware/tokenValidator'
const router = express.Router()

// POST /v1/api/dealers/single
router.post('/single', validateToken, DealersController.saveDealer)

// POST /v1/api/dealers/bulk
router.post('/bulk', validateToken, DealersController.saveDealers)

// GET /v1/api/dealers/:id
router.get(
  '/:id',
  validateToken,
  checkObjectId('id'),
  DealersController.getDelaerById
)

// GET /v1/api/dealers/
router.get('/', validateToken, DealersController.getAllDealers)

// DELETE /v1/api/dealers/:id
router.delete(
  '/:id',
  validateToken,
  checkObjectId('id'),
  DealersController.deleteById
)

// PUT /v1/api/dealers/:id
router.put(
  '/:id',
  validateToken,
  checkObjectId('id'),
  DealersController.updateById
)

export default router
