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
    let parsedURL = url.parse(request.url);
    // const responseJSON = {};
    switch (parsedURL.pathname) {
        case '/':
            htmlHandler.getIndex(request, response);
            // jsonHandler.respondJSON(request, response, 200, responseJSON);
            break;
        case '/success':
            jsonHandler.success(request, response);
            break;
        case '/badRequest':
            jsonHandler.success(request, response, query.parse(parsedURL.query));
            break;
        case '/unauthorized':
            // jsonHandler.respondJSON(request, response, 401);
            break;
        case '/forbidden':
            // jsonHandler.respondJSON(request, response, 403);
            break;
        case '/internal':
            // jsonHandler.respondJSON(request, response, 500);
            break;
        case '/notImplemented':
            // jsonHandler.respondJSON(request, response, 501);
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;
                                  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
