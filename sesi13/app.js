// Requires
const express = require('express')
const app = express()
const port = 3000

const route = require("./routes/index")

// Middlewares
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.use(route)

// Listen
app.listen(port,() => {
  console.log(`listening on port: ${port}!`)
})



// HTTP Method -> GET, POST //, PUT, DELETE, PATCH
// GET -> Get Data
// POST -> Create, Edit, Update