const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

router.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

router.get('/helloJSON', (req, res) => {
  res.json({
    message: 'Hello there!',
  });
});

router.get('/timeJSON', (req, res) => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  res.json({
    time: `${dateString}`,
  });
});

module.exports = router;
