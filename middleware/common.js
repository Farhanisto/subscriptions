const bodyparser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

module.exports = function commonMiddleware(app){
   app.use(bodyparser.json())
   app.use(morgan("common"))
   app.use(cors())
   app.use("helmet")
}