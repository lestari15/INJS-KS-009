const express = require("express")
const app = express()
const port = 3000
const Admin = require("./models/Admin")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine')

app.post('/admin', Admin.create);

app.get('/admin', Admin.read);


app.listen(port, () => {
    console.log("Listening on port:", port)
})