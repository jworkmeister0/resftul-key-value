# About
This is a basic implementation of a RESTful web service for manipulating key/value pairs.

# Dependencies

#### Software:
* [Node.js (version 4.0.0 or higher)](https://nodejs.org/en/download/)
* npm (included with Node.js)
* [Postman](https://www.getpostman.com/) or [cURL](https://curl.haxx.se/) or any other API testing tool of choice

#### User Knowledge:
* Basic understanding of CLI's: ability to navigate directories and run commands
* Basic understanding of RESTful web services and how to interact with them


# To Use
1. Clone this repo to your local machine.
2. Navigate to the repo's root. 
3. Run `npm start`. The server should start running locally.
4. Using your API testing tool of choice, start interacting with the server. The base URL should be `localhost:3000`
5. Refer to API documentation for more details on the API.

# API Reference

* `GET /api/pairs	` returns all key/value pairs
*  `GET /api/value` to return 
*  `PUT /api/pair?key=KEY&value=VALUE` to insert or update a key / value pair.


#Considerations 
1. Key collisions can occur. If this behavior is undesirable, the specification will need to be updated.
