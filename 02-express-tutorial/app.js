const express = require('express')
const app = express()
const port = 3000
const {people}=require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
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

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))