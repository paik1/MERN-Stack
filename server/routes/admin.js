import { validateRole } from '../middleware/roleValidator'
const express = require('express')
const router = express.Router()

// POST /v1/api/admin
router.post('/', validateRole(), async (req, res) => {
  try {
    return res.status(201).json({ message: 'Admin created successfully' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// PUT /v1/api/admin/:phone
router.put('/:phone', async (req, res) => {
  try {
    // Business logic
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// DELETE /v1/api/admin/:phone
router.delete('/:phone', async (req, res) => {
  try {
    // Business logic
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// GET /v1/api/admin/isauthorized/:phone
router.get('/isauthorized/:phone', async (req, res) => {
  try {
    // Business logic
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

export default router
