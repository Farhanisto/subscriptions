const express = require('express')
const dotenv = require('dotenv')
const plansController = require('./controllers/plans-controller')
const subscriptionController = require('./controllers/subscription-controller')
const MiddleWare = require('./middleware/middleware')
const ErrorHandlingMiddleWare = require('./middleware/error-handling')

dotenv.config()
const port = process.env.port || 3000
const app = express()
MiddleWare(app)
app.use('/api/plans', plansController)
app.use('/api/subscription', subscriptionController)

//error handling middleware
ErrorHandlingMiddleWare(app)
app.listen(port, () => {
console.log(`server is running on port ${port}`)
}
)
