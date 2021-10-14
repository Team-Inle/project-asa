
// Spike 2: Testing a RESTful API
const express  = require('express');
const app = express();
const PORT = 8081;

// apply the json middleware
app.use(express.json())

app.listen(
    PORT,
    () => console.log('Running on ', PORT)
);


// Set up a RESTful route that if a GET request (ie, receiving text) is made to content,
// the user reseives the content we need to send
app.get('/content', (req, res) => {
    res.status(200).send({
        'content': 'A message from CS361'
    })
});


// Set up a RESTful route that if a POST request (ie, sending text) is made to content ID,
// the user is able to submit the content in the body of their request, then we output it (send it back)
// just so we can confirm it was sent
app.post('/content', (req, res) => {

    // take the paramaters passed via the body of the request and set them equal to the new ID
    const { id } = req.params;
    const { body } = req.body;

    // send back the body of the request that was received (to show we received it)
    res.status(200).send({
        post_content: req.body,
    }
    )
});
