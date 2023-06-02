const express = require('express')
const app = express()
const port = 3000
const {people}=require('./data')

app.use(express.static('./methods-public'))



app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})




app.post('/api/people', (req, res) => {
    res.status(201).send("success")
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))