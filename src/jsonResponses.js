// function to respond with a json object
// takes request, response, status code and object to send
const respondJSON = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  // response.write(JSON.stringify(response));
  response.end();
};

module.exports = {
    respondJSON,
};
