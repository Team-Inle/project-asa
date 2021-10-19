const express = require ("express");
const cors = require('cors');
const app = express();


let PORT = process.env.PORT || 5151;


// Serve base api route that returns a parameter passed via request
app.get('/api/track/:id', cors(), async (req, res, next) => {
    try {
      const text = req.params.id;
      const test_text = { text: 'Hello World!' };
      res.json({ test_text, text });
    } catch (err) {
      next(err);
    }
  });


// Serve our base route that returns all track details
app.get('/api/track/', cors(), async (req, res, next) => {
    try {
      const test_text = { text: 'Hello World!' };
      res.json({ test_text });
    } catch (err) {
      next(err);
    }
  });


// accepts a post request and returns a response
app.post("/api/post/", (req, res) => {
    var postResponse = { context: "received"};
    res.status(200).send(postResponse);
});


app.listen(port, () => {
    console.log(`running on port http://localhost:${PORT}`);
});