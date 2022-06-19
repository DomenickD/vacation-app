const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
    console.log('test');
});

app.listen(PORT, () => {
    console.log('Port is running on 8080.')
});