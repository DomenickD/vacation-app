const express = require('express');
const app = express();
const {suggestions} = require('utils.js');
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
    console.log('test');
});

app.get('/suggestions', (req, res, next) => {
    res.status(200).send(suggestions);
});

app.listen(PORT, () => {
    console.log('Port is running on 8080.')
});