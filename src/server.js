const express = require('express');
const child_process = require('child_process');
const path = require('path');
const { platform } = require('os');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/credits', (req, res) => {
    res.sendFile(`${__dirname}/credits.html`);
})

app.get('/javascript', (req, res) => {
    res.sendFile(`${__dirname}/javascript.html`);
});

app.get('/css', (req, res) => {
    res.sendFile(`${__dirname}/css.html`);
});

app.use('/public', express.static(`${__dirname}/../public`))

app.listen(port, () => {
    console.log(`Now serving website at port ${port}!\nLocal: http://127.0.0.1:8080`);
    // let browserWindow = process.platform == "win32" ? child_process.spawn(`explorer http://localhost:${port}`) : child_process.spawn(`open http://localhost:${port}`) 
});