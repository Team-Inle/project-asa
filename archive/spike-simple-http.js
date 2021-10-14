
// set up a basic HTTP site using the generic localhost and an available port
const http = require('http');
const hostname = '127.0.0.1';
const PORT = 3005;

// create a simple HTTP server
const server = http.createServer((req, res) => {

    // when the user submits a GET request, respond with a status code of 200
    res.statusCode = 200;

    // send the user a desired response
    res.setHeader('Content-Type', 'text/plain');
    res.end('A message from CS361');
});

// run the simple server 
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});




const https = require('https')

const data = JSON.stringify({
  todo: 'A message from CS361'
})

const options = {
  hostname: 'whatever.com',
  port: 443,
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
