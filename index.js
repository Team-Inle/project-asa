const express = require('express')
const cors = require('cors')

// Create the server
const app = express()
// Serve our api route that returns a custom text
app.get('/api/:say', cors(), async (req, res, next) => {
  try {
    const text = req.params.say
    const test_text = { text: 'Hello World!' }
    res.json({ test_text, text })
  } catch (err) {
    next(err)
  }
})

// Serve our base route that returns a Hello World text
app.get('/api/', cors(), async (req, res, next) => {
  try {
    const test_text = { text: 'Hello World!' }
    res.json({ test_text })
  } catch (err) {
    next(err)
  }
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port http://localhost:${PORT}/api/id`)
})