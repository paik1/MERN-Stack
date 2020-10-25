const express = require('express');
const router = express.Router();
const { saveDealer } = require('../Services/dealers');

router.post('/', async (req, res) => {
  try {
    const result = await saveDealer(req);
    return res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
