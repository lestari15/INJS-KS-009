const express = require('express')
const jwt = require("jsonwebtoken")
const port = 3000
const data = require("./data.json")
const app = express()

app.use(express.urlencoded({ extended : true }))

app.get("/getData", (request, response) => {
    const token = cek(request)
    if (token) {
        console.log(token)
        response.json(token)
    } else {
        response.json({msg: "Autorisasi gagal"})
    }
})

app.post("/login", (request, response) => {
    console.log(request.body)
    const cariData = data.find((find)=> {
        return find.email=== request.body.email && find.password === request.body.password
    })
    if (cariData) {
        const token = jwt.sign(cariData, "rahasia", { expiresIn: '1h'})
        response.json({
            token: token,
            dataUser: cariData
        })
    } else {
        response.json({msg: "Email atau password tidak terdaftar"})
    }
})

function cek (req) {
    const token = req.headers['x-access-token'];
    if (token) {
        try {
            var decoded = jwt.verify(token, "rahasia");
            return decoded
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
}

app.listen(port, () => {
    console.log('Listening on Port', port )
})