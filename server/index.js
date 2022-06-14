const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send("HELLO");
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});