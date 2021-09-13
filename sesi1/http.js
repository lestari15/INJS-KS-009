const http = require ("http")
const port = 3000

http.createServer(function (req, res) {
    Response.end("Hello world dari Node JS Server")
}).listen(port)

console.log("Listening On Port" + port)