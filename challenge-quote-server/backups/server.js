// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const port = 3001;

//load the quotes JSON
const quotes = require("../quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Marina's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  res.send(quotes);
});

app.get("/quotes/search", (req, res) => {
  const searchWord = req.query.term;
  // console.log(searchWord);
  const result = search(searchWord);
  res.send(result);
});

app.get("/quotes/random", function (req, res) {
  res.send(pickFromArray(quotes));
});

function search(term) {
  return quotes.filter((q) => q.quote.includes(term));
}
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
