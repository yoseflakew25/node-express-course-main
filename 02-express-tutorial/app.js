hconst express = require('express')
const app = express()
const port = 3000


const {products}=require('./data')

app.get('/', (req, res) => {
    res.json(  '<h1>Home Page</h1><a href="/api/products">products</a>') 
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})


