// function to respond with a json object
// takes request, response, status code and object to send
const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a success response',
    };
    
    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This response has required parameters',
    };
    
    //if the request does not contain a valid=true query parameter
  if(!params.valid || params.valid !== 'true') {
    //set our error message
    responseJSON.message = 'Missing valid query parameter set to true';
    //give the error a consistent id 
    responseJSON.id = 'badRequest';
    //return our json with a 400 bad request code
    return respondJSON(request, response, 400, responseJSON);
  }

  //if the parameter is here, send json with a success status code
  return respondJSON(request, response, 200, responseJSON);
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

