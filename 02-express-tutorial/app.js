const express = require('express')
const app = express()
const port = 3000


const {products}=require('./data')

app.get('/', (req, res) => {
    res.json(products) 
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})


