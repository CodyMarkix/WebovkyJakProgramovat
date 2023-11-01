const express = require('express');

const app = express();

console.log(app.use(express.static('public')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
})

app.get('/public', express.static('public'))

app.listen(8081);