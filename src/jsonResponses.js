// function to respond with a json object
// takes request, response, status code and object to send
const respond = (request, response, status, data, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(data);
  response.end();
};

const success = (request, response,type) => {
    if(type === 'text/xml')
        {
            let responseXML = '<response>';
            responseXML += '<message>This is a successful response.</message>';
            responseXML +='</response>';
            
            return respond(request, response, 200, responseXML, 'text/xml');
        }
    //json response
    const responseJSON = {
        message: 'This is a success response',
    };
    
    const stringifiedJSON = JSON.stringify(responseJSON);
    
    
    return respond(request, response, 200, stringifiedJSON, 'application/json');
};

const badRequest = (request, response, type, params) => {
    if(params.valid || params.valid !== 'true')
        {
            // send 400 as xml or json
            if(type === 'text/xml')
        {
            let responseXML = '<response>';
            responseXML += '<message>This is a unsuccessful response.</message>';
            responseXML += '<id>badRequest</id>';
            responseXML +='</response>';
            
            return respond(request, response, 200, responseXML, 'text/xml');
        }
        }
    // send 200 as xml or json
    if(type === 'text/xml')
        {
            let responseXML = '<response>';
            responseXML += '<message>This is a successful response.</message>';
            responseXML +='</response>';
            
            return respond(request, response, 200, responseXML, 'text/xml');
        }
    //json response
    const responseJSON = {
        message: 'This is a success response',
    };
    
    const stringifiedJSON = JSON.stringify(responseJSON);
    
    
    return respond(request, response, 200, stringifiedJSON, 'application/json');
};

//function to show not found error
const notFound = (request, response) => {
  //error message with a description and consistent error id
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  //return our json with a 404 not found error code
  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    success,
    badRequest,
    notFound,
};

