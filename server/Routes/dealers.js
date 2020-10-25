const express = require('express')
const router = express.Router()
const { saveDealer } = require('../services/dealers')

// POST /v1/api/dealers/single
router.post('/single', async (req, res) => {
  try {
    console.log(req)
    const result = await saveDealer(req)
    return res.json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// POST /v1/api/dealers/bulk
router.post('/bulk', async (req, res) => {
  try {
  } catch (error) {}
})

// GET /v1/api/dealers/:id
router.get('/:id', async (req, res) => {
  try {
  } catch (error) {}
})

// GET /v1/api/dealers
router.get('/', async (req, res) => {
  try {
  } catch (error) {}
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
