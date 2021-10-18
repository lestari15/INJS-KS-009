const express = require('express')
const port = 3000
const app = express()
const data = require('./data.json')
const fs = ('fs')

app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    // res.render("index.pug", {
    //     // nama: "Lestari",
    //     // npm: "INJS-KS-009",
    //     // alamat: "Lampung"
    // })
    let inputFirst = req.query.first
    let inputLast = req.query.last
    let find = data.find((el) =>{
        return inputFirst === el.first_name
    })
    res.send(find)
})

// input express server
// body = /
// query = ?
// params = :

app.listen(port, () =>{
    console.log('Listening on Port')
})