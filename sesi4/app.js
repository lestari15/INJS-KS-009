const { response } = require("express")
const express = require("express")
const port = 3000
const app = express()

// 1.url path
// 2. function yg akan dijalan kan/callback
// http://localhost:port

// untuk menjelaskan ke pengguna


const fn1 =(request, response, next) =>{
    console.log('Masuk GET /')
next()
}

function fn2 (request, response){
    console.log("Masuk GET / kedua")
    response.send("Hello from express js")
}

app.get('/', fn1, fn2)


// app.get(url,callback,callback)
// midlewear - functuion yg dipakai sebelum
// ngasih tau expess dia bisa nerima data dlm bntk url encoded

app.post('/',(request, response) =>{
    console.log('Masuk post /')
    response.send("Hello from express js")
})

app.delete('/',(request, response) =>{
    console.log('Masuk delete /')
    response.send("Masuk ke delete")
})

app.put('/',(request, response) =>{
    console.log('Masuk put /')
    response.send("Masuk ke PUT")
})

app.patch('/',(request, response) =>{
    console.log('Masuk patch /')
    response.send("Masuk ke patch")
})

app.listen(port, () =>{
    console.log("Listening on port:", port)
})

// JSON - java script object notation

// http method
// GET - minta data, buka halaman - via search box browser
// POST mengirim data - text, json, file

// PUT - update
// PATCH - update