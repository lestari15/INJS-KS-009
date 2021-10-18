const { response } = require("express")
const express = require("express")
const port = 3000
const app = express()

// let path = __dirname.split('/');
// path.pop()
// path = path.join('/')
// console.log(path)
app.use(express.static('public'))


// express.static("public")

// app.get('/',(req,res) =>{
//     res.send('Ini Home')
// })
// route pertama
app.get('/mid', (req,res, next)=>{
console.log("Middleware")
    next()
},(req,res) =>{
    console.log(('Endpoint handler'))
    res.sendFile('./public/index.html', {root: __dirname});
})

app.get('/about', (req,res)=>{
    res.sendFile('./landing-page/about.html', {root: __dirname});
})
app.get('/gambar', (req,res)=>{
    res.sendFile('./public/retail.jpg', {root: __dirname});
})

app.get('/contact', (req,res)=>{
    res.sendFile('./landing-page/contact.html', {root: __dirname});
})


app.listen(port, ()=>{
    console.log('Listening on Port')
})


// autentikasi
// pengecekan apkah user sudah terdaftar atau blm
// dia sudah register?
// ada di db

// sukses boleh masuk, gagal gagal error autenticated 401
// middleware awal (setup server)