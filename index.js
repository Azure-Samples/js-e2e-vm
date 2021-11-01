const express = require('express')
const app = express()
const os = require('os');
app.get('/', function (req, res) {
    console.log(`root ${Date.now()}`)
    const clientIP = req.headers['x-forwarded-for'];
    res.send(`Hello World from host ${os.hostname()} ${clientIP} ${Date.now()}!`)
})
app.listen(3000, function () {
    console.log(`Hello world app listening on port 3000! ${Date.now()}`)
})
