import checkObjectId from '../utils/checkObjectId'

const express = require('express')
const router = express.Router()
const {
  saveDealer,
  saveDealers,
  getDelaerById,
  getAllDealers,
} = require('../services/dealers')

// POST /v1/api/dealers/single
router.post('/single', async (req, res) => {
  try {
    const result = await saveDealer(req.body)
    return res.status(201).json({
      id: result,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// POST /v1/api/dealers/bulk
router.post('/bulk', async (req, res) => {
  try {
    const result = await saveDealers(req.body)
    return res.status(201).json({
      ids: result,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// GET /v1/api/dealers/:id
router.get('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const result = await getDelaerById(req.params.id)
    if (result) {
      return res.json(result)
    } else {
      return res.status(404).json({ error: 'Dealer details not found' })
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// GET /v1/api/dealers
router.get('/', async (req, res) => {
  try {
    const result = await getAllDealers()
    if (result) {
      return res.json(result)
    } else {
      return res.status(404).json({ error: 'Dealer details not found' })
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// DELETE /v1/api/dealers/:id
router.delete('/dealer', async (req, res) => {
  try {
  } catch (error) {}
})

// PUT /v1/api/dealers/:id
router.put('/dealer', async (req, res) => {
  try {
  } catch (error) {}
})

export default router
