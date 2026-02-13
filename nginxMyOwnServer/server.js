const http = require("http")
const fs = require("fs")
const path = require("path")

const port = 3000 ;
const server = http.createServer((req , res) => {
   path.join(__dirname)
});

// crete own server using nginx

server.listen(port , () => {
 console.log(`Server is lisning on port number ${port}`)
})