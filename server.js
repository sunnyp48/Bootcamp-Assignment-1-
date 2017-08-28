

var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);


   if( parsedUrl.pathname == '/listings' )
   {
       // cp.exec(readFile);  
       response.writeHead(200);
        var data = JSON.stringify(listingData);
        response.end(data);
       // response.end();
        
    }
    else 
    {
      response.writeHead(404);
      response.end('Bad gateway error');
    }

    

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};



fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */

      listingData = JSON.parse(data);




       // a server is created, but not started
    var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080
    server.listen(port, function() {
  //once the server is listening, this callback function is executed
   console.log("server listening on: http://localhost:" + port);
      });

      
});




