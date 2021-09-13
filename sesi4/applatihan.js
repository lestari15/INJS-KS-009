const { response, request } = require("express")
const express = require("express")
const port = 3000
const app = express()
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/users',(request, response) =>{
    const dataJson = []
    const dataFromClient = request.body
    
    for(let i = 0; i < dataFromClient.length; i++) {
        dataJson.push(dataFromClient[i])
    }

    fs.writeFile('data.json', JSON.stringify(dataJson), (err)=>{
        if(err) {
            response.json({
                status: "Gagal"
            })
        }else {
            response.json({
                status: "Berhasil"
            })
        }
    })

})

app.put('/users', (request, response) =>{
    const dataJson = []
    const dataFromClient = request.body
    
    for(let i = 0; i < dataFromClient.length; i++) {
        dataJson.push(dataFromClient[i])
    }

    fs.writeFile('data.json', JSON.stringify(dataJson), (err)=>{
        if(err) {
            response.json({
                status: "Gagal"
            })
        }else {
            response.json({
                status: "Berhasil"
            })
        }
    })

})

app.get('/users', (request, response) => {

    fs.readFile('./data.json', "utf-8", (err, data)=> {
        if(err) {
            response.json({
                status: "Gagal"
            })
        }else {
            response.json({
                status: "Berhasil",
                data: JSON.parse(data)
            })
        }
    })

})

app.delete('/users', (request, response) =>{
    const dataJson = []
    const dataFromClient = request.body
    
    for(let i = 0; i < dataFromClient.length; i++) {
        dataJson.push(dataFromClient[i])
    }

    fs.writeFile('data.json', JSON.stringify(dataJson), (err)=>{
        if(err) {
            response.json({
                status: "Gagal"
            })
        }else {
            response.json({
                status: "Berhasil"
            })
        }
    })

})

app.listen(port, () =>{
    console.log("Listening on port:", port)
})