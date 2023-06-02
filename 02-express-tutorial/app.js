const express = require('express')
const app = express()
const port = 3000
const morgan=require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')



// req => middleware => res

// app.use(express.static('./public'))

app.use(morgan('tiny'))
app.get('/',(req, res) => {

    res.send("Home")
})



app.get('/about', (req, res) => {
    res.send("About")
})


app.get('/api/products',(req, res) => {

    res.send("Products")
})
  

app.get('/api/items', (req, res) => {
    res.send("Items")
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))