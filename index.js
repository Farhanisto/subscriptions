const express = require('express')
const dotenv = require('dotenv')
const plansController = require('./controllers/plans-controller')
const subscriptionController = require('./controllers/subscription-controller')
const MiddleWare = require('./middleware/middleware')

dotenv.config()
const port = process.env.port || 3000
const app = express()

app.use('api/plans', plansController)
app.use('api/subscription', subscriptionController)
app.listen(() => {
console.log(`server is running on port ${port}`)

}
)
