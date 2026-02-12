const http = require("http")
const fs = require("fs")
const path = require("path")

const port = 3000 ;
const server = http.createServer();

// crete own server using nginx

server.listen(port , () => {
 console.log(`Server is lisning as port number ${port}`)
})