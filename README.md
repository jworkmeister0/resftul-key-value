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

* `GET /api/pairs` returns all key/value pairs
*  `GET /api/value` to return
*  `PUT /api/pair?key=KEY&value=VALUE` to insert or update a key / value pair.


# Design Goals and Thoughts
I designed the code to require minimal explaination. Native JavaScript objects are
well-suited for holding key-value pairs, so we take advantage of this. All of
the pairs are stored in one JS object. Assuming it was populated (predictable) with data, it would
look something like this when stringified:
```json
{
  "key_1": "value_1",
  "key_2": "value_2",
  ...
}
```

I was also able to leverage some fancy ES6 features for more readable code. You'll
find [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
as well as [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names).

#Considerations

1. Key collisions can occur. When a collision happens, the value is quietly overwritten. If this behavior is undesirable, the specification will need to be updated.
