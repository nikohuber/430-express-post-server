const express = require('express');
const db = require('../db.js');

const router = express.Router();

const data = db.getAllQuotes();

router.get('/', (req, res) => {
  const { id } = req.query;
  console.log(`id=${id}`);

  let temp = data.find((quote) => quote.id === id);

  if (temp === undefined) {
    temp = {};
  }
  if (id === undefined) {
    temp = data;
  }

  res.json(temp);
});

router.get('/random', (req, res) => {
  res.json(db.randomQuote());
});

router.get('/recent', (req, res) => {
  res.json(db.recentQuote());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id=${id}`);

  let temp = db.getQuoteById(id);

  if (temp === undefined) {
    temp = {};
  }
  if (id === undefined) {
    temp = data;
  }

  res.send(temp);
});

module.exports = router;
