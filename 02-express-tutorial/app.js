const express = require('express')
const app = express()
const port = 3000


const {products}=require('./data')

app.get('/', (req, res) => {
    res.json(  '<h1>Home Page</h1><a href="/api/products">products</a>') 
})



app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    })

    res.json( newProducts)
})



app.get('/api/products/:productId', (req, res) => {
    const singleProduct = products.find((product) => {
        return product.id === parseInt(req.params.productId)
    })     
    

    if (!singleProduct){
        return res.status(404).json({message: 'Product not found'})
    }

    res.json( singleProduct)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})


