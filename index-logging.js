const express = require('express')
const app = express()
const os = require('os');

let appInsights = require('applicationinsights');

appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY || 'REPLACE-WITH-YOUR-INSTRUMENTATION-KEY')
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();

let client = appInsights.defaultClient;
    
app.get('/trace', (req, res) => {
    client.trackPageView();
    const clientIP = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`testing from trace route ${clientIP}`)
    client.trackTrace({ message: `testing from trace route ${clientIP}`})
    client.flush();
    res.send('tracing...')
})

app.get('/', function (req, res) {
    res.send('Hello World from host ' + os.hostname() + '!')
})
app.listen(3000, function () {
    console.log('Hello world app listening on port 3000!')
})