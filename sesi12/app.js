const express = require('express')
const app = express()
const port = 3000

const { User } = require("./models")

app.get("/users", (req, res) => {
  User.findAll()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  // promise
})

app.listen(port, () => {
  console.log("Listening on port:", port)
})