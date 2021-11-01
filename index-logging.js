const express = require('express')
const app = express()
const os = require('os');

console.log(JSON.stringify(process.env));

let client=null;
let appInsights = require('applicationinsights');

if(process.env.APPINSIGHTS_INSTRUMENTATIONKEY){

    console.log(`process.env.APPINSIGHTS_INSTRUMENTATIONKEY is found`);
    
    appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
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
    
    client = appInsights.defaultClient;
} else {
    console.log(`process.env.APPINSIGHTS_INSTRUMENTATIONKEY not found`);
}
    
app.get('/trace', (req, res) => {

    const clientIP = req.headers['x-forwarded-for'];
    console.log(`testing from trace route ${clientIP}`)
    
    if(client){
        
        console.log(`client not found`);
        
        client.trackPageView();
        client.trackTrace({ message: `testing from trace route ${clientIP}`})
        client.flush();
        
    } else {
        
        console.log(`client not found`);
    }
    
    res.send('tracing...' + clientIP)
})

app.get('/', function (req, res) {
    const clientIP = req.headers['x-forwarded-for'];
    res.send(`Hello World from host ` + os.hostname() + `, ${clientIP}!`)
})
app.listen(3000, function () {
    console.log('Hello world app listening on port 3000!')
})
