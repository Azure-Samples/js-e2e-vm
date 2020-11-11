const express = require('express')
const app = express()
const os = require('os');
app.get('/', function (req, res) {
    const clientIP = req.headers['x-forwarded-for'];
    res.send(`Hello World from host ' + os.hostname() + ', ${clientIP}!`)
})
app.listen(3000, function () {
    console.log('Hello world app listening on port 3000!')
})