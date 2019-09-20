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
            // jsonHandler.respondJSON(request, response, 200, responseJSON);
            break;
        case '/success':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 200, responseJSON);
            break;
        case '/badRequest':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 401, responseJSON);
            break;
        case '/unauthorized':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 401, responseJSON);
            break;
        case '/forbidden':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 403, responseJSON);
            break;
        case '/internal':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 500, responseJSON);
            break;
        case '/notImplemented':
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 501, responseJSON);
            break;
        default:
            htmlHandler.getIndex(request, response);
            jsonHandler.respondJSON(request, response, 404, responseJSON);
            break;
                                  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
