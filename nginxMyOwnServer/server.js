const http = require("http")
const fs = require("fs")
const path = require("path")
// port number
const port = 3000 ;
const server = http.createServer((req , res) => {
    
   const filePath = path.join(__dirname , req.url === '/' ? "index.html" : req.url );
   console.log(filePath)

   const extName = String(path.extname(filePath)).toLocaleLowerCase()

   const mimeTypes = {
    ".html" : "text/html",
    ".css" : "text/css" ,
    ".js" : "text/javascript",
    ".png" : "text/png"

   }

   const contentType = mimeTypes[extName] || "application/octet-stream";

   fs.readFile(filePath , (err , content) => {
    if (err) {
        if(err.code === "ENOENT"){
            res.writeHead
            (404 , {"Content-Type" : "text/html" })
            res.end("404 : File Not Found Bro :( ")
        }
    }else{
        res.writeHead(200 , {"Content-Type" : contentType})
        res.end(content , "utf-8")
    }
   })
});



// crete own server using nginx

server.listen(port , () => {
 console.log(`Server is lisning on port number ${port}`)
})