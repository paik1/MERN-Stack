const express = require('express')
const router = express.Router()
const { saveDealer } = require('../services/dealers')

router.post('/', async (req, res) => {
  try {
    const result = await saveDealer(req)
    return res.json(result)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

export default router
