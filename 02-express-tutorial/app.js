const express = require('express')
const app = express()
const port = 3000
const {people}=require('./data')

app.use(express.static('./methods-public'))

app.use(express.json())


app.use(express.urlencoded({extended:true}))


app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})





app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))