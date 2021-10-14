// first confirm that this spike document has loaded
console.log('spike-http.js is running')

var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;


// this is a URL to a website that is used to check if HTTP requests have been made successfully
const URL = 'http://jsonplaceholder.typicode.com/posts';

// set up constant paramater to send during POST requests
const PARAM = `{
    "content": "A message from CS361"
}`

// General notes on Ready State and request Status 
// the Ready State means:
    // 0: means the request was not initialized
    // 1: means the server connection was established
    // 2: means the request was received
    // 3: means the request has started being processed
    // 4: means the request has finished processing, and a response has been received

// the request Status means:
    // 500-599: server-side error
    // 400-499: client-side error
    // 300-399: encountered a redirect
    // 200-299: the request was correct
    // 100-199: information message
// source: https://stackoverflow.com/questions/17561463/readystate-vs-status-200/26087812





// Spike 1: Traditional Asynchronous HTTP request (non-RESTful)
var AsyncHttpClient = function() {

    // create function for a get request (send data)
    this.get = function(providedURL, providedCallback) {

        // this creates a new XMLHttpRequest object that will be used to send the request to the browser
        const request = new XMLHttpRequest();

        // using the request object, we will open the provided URL using GET HTTP protocol
        request.open('GET', providedURL);

        // once we have set up the request, send it
        request.send( null ) 

        // once the ready state has changed, check the new ready state and see what the result of the request is 
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                // check state and status
                console.log(request.responseText)
                providedCallback(request.responseText);

            }
        };

    }

    // // create function for a post request (receive data)
    // this.post = function(providedURL, providedCallback) {

    //     // this creates a new XMLHttpRequest object that will be used to send the request to the browser
    //     const request = new XMLHttpRequest();

    // }
}

// Spike 1: Testing a HTTP GET request (ie, sending text)
var newAsyncHttpClient = new AsyncHttpClient();
newAsyncHttpClient.get(URL, function(response) {
    console.log(response);
});









// // Spike 1: Testing a HTTP POST request (ie, receiving text)

// // using the request object, we wil open the provided URL using POST HTTP protocol
// request.open('POST', url);

// // that that we have set up the request, send it
// request.setRequestHeader('Content-Type', 'text/xml');
// request.send(param)

// // once the ready state has changed, check the new ready state and see what the result of the request is
// request.onreadystatechange = function() {

//     // check stat and status
//     if (this.readyState == 4 && this.status == 200) {

//        // Typical action to be performed when the document is ready:
//        console.log(readyState)
//        console.log(request.responseText)
//     }
// };
