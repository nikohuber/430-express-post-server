const fs = require('fs');
const path = require('path');

const quotesPath = path.resolve(__dirname, 'data/quotes-data.json');
const jsonString = fs.readFileSync(quotesPath);
const data = JSON.parse(jsonString);
const { quotes } = data;

const getAllQuotes = () => quotes;

const randomQuote = () => {
  const randQ = quotes[Math.floor(Math.random() * quotes.length)];
  return randQ;
};

const recentQuote = () => {
  const recQ = quotes[quotes.length - 1];
  return recQ;
};

const getQuoteById = (id) => {
  const foundQ = quotes.find((quote) => quote.id === id);
  return foundQ;
};

module.exports = {
  getAllQuotes,
  randomQuote,
  recentQuote,
  getQuoteById,
};
