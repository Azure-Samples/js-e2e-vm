const express = require('express')
const app = express()
const os = require('os');
app.get('/', function (req, res) {
    res.send('Hello World from host ' + os.hostname() + '!')
})
app.listen(3000, function () {
    console.log('Hello world app listening on port 3000!')
})