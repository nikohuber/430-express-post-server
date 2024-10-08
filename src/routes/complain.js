const express = require('express');

const router = express.Router();

router.get('/cry', (req, res) => {
  res.send('wwaaaaahhh!');
});

router.get('/whine', (req, res) => {
  res.send('WAAAHHH!');
});

module.exports = router;
