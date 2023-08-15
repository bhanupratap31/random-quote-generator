const express = require('express');  //import express.js
const cors = require('cors');      // cors allows to use express middleware
const quotes = require('./quotes.json');

const app =  express();

app.use(cors());

const port = 3000; 

app.get('/random-quote', (req, res)=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
}); 

app.listen(port, () => {
    console.log('Server is up and running...')
})

