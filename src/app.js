const express = require('express');

const port = 3000;
const path = require('path');

const filePath404Page = path.resolve(__dirname, '../client/404.html');

const indexRouter = require('./routes/index.js');
const quotesRouter = require('./routes/quotes.js');
const complainRouter = require('./routes/complain.js');
const apiRouter = require('./routes/api.js');

const app = express();
app.use(express.static('client'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use('/complain', complainRouter);
app.use('/api', apiRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(filePath404Page);
});


app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
