const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('wellcome to our home page')
    }

    if (req.url==='/about') {
        res.end('this is our about page')
    }


    res.end('404')
 
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');          
})