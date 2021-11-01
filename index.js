const os = require('os');
const express = require('express')
const app = express()

app.get('/', function (req, res) {

    const clientIP = req.headers['x-forwarded-for'];
    const msg = `root route ${os.hostname()} ${clientIP} ${new Date()}`
    console.log(msg)

    res.send(msg)
})
app.listen(3000, function () {
    console.log(`Hello world app listening on port 3000! ${Date.now()}`)
})
