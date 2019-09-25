const http = require('http'); // pull in http module
// url module for parsing url string
const url = require('url');
// querystring module for parsing querystrings from url
const query = require('querystring');
// pull in our custom files
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': htmlHandler.getIndex,
    '/style.css':htmlHandler.getCSS,
    '/success':jsonHandler.success,
    '/badRequest':jsonHandler.badRequest,
    notFound: htmlHandler.getIndex,
};

const onRequest = (request, response) => {
    let parsedURL = url.parse(request.url);
    
    let params = query.parse(parsedURL.query);
    
    const type = request.headers.accept.split(',')[0];
    
    if(urlStruct[parsedURL.pathname])
        {
            urlStruct[parsedURL.pathname](request, response, type, params);
        }
    else{
        urlStruct.notFound(request, response);
    }
    
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
