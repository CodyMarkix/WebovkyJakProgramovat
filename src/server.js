const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.use('/public', express.static(`${__dirname}/../public`))

app.listen(port, () => {
    console.log(`App serving at port ${port}`);
});