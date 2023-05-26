const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
    res.status(200).send('Home page!')
})

app.get('/about', (req, res) => {
   
    res.status(200).send('About page!')
})


app.all('*', (req, res) => {
    res.status(404).send('404 not found')
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})