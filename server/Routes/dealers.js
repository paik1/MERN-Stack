import checkObjectId from '../utils/checkObjectId'
const express = require('express')
const router = express.Router()
const {
  saveDealer,
  saveDealers,
  getDelaerById,
  getAllDealers,
  deleteById,
  updateById,
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
router.delete('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const result = await deleteById(req.params.id)
    if (result) {
      return res.json({ message: 'Dealer detail deleted successfully' })
    } else {
      return res.status(404).json({ error: 'unable to delete dealer details' })
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// PUT /v1/api/dealers/:id
router.put('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const result = await updateById(req.params.id, req.body)
    console.log(result);
    if (result) {
      return res
        .status(200)
        .json({ message: `${req.params.id} details updated successfully` })
    } else {
      return res
        .status(400)
        .json({ error: `Failed to update ${req.params.id} details` })
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

export default router
