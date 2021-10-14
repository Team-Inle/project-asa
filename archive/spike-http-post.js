var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.listen(3009, function () {
  console.log('Example app listening on port 8000!');
 });
 
 
 
 const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
        hostname: '127.0.0.1',
    port: 3009,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
