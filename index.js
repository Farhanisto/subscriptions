const express = require('express')
const plansController = require('/controllers/plans-conroller')
const subscriptionController = require('/controllers/subscription-controller')
const port = process.env.port || 3000
const app = express()

app.use('api/plans', plansController)
app.use('api/subscription', subscriptionController)
app.listen(port => 
console.log(`server is running on port ${port}`)
);
