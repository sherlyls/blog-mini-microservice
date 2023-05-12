const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {

})

// receive events from event-bus
app.post('/events', (req, res) => {
    const { type, data } = req.body

  if (type === 'PostCreated') {
    const { id, title } = data

    post[id] = { id, title, cooment: []}
  }
})

app.listen(4002, () => {
    console.log('Listening 4002')
})