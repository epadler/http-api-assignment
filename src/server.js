const http = require('http'); // pull in http module
// url module for parsing url string
const url = require('url');
// querystring module for parsing querystrings from url
const query = require('querystring');
// pull in our custom files
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const responseJSON = {};
  switch (url.parse(request.url)) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/success':
      htmlHandler.getIndex(request, response);
      break;
    case '/badRequest':
      htmlHandler.getIndex(request, response);
      break;
    case '/unauthorized':
      htmlHandler.getIndex(request, response);
      break;
    case '/forbidden':
      htmlHandler.getIndex(request, response);
      break;
    case '/internal':
      htmlHandler.getIndex(request, response);
      break;
    case '/notImplemented':
      htmlHandler.getIndex(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      jsonHandler.respondJSON(request, response, 404, responseJSON);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
