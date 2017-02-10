var express = require("express");
var app = express();

defineAPI(app);
app.listen(3000);

function defineAPI(){
  // Holds all of the values, indexed by their respective keys
  var pairs = {};

  /**
   * GET all key value pairs
   */
  app.get("/api/pairs", (req, res) => {
    res.json(pairs);
  });

  /**
   * PUT a key/value pair in memory.
   * Sends the new key/value pair if successful.
   */
  app.put("/api/pair", (req, res) => {
    if (req.query.key && req.query.value){
      pairs[req.query.key] = req.query.value; // insert the pair in memory
      res.status(200).json({ [req.query.key]: req.query.value });
    } else{
      res.status(400).send("ERROR: Invalid params");
    }
  });

  /**
   * GETs a value given a particular key.
   * Sends the pair, or an empty object if no value exists under the key.
   */
  app.get("/api/value", (req, res) => {
    if (req.query.key){
      if (pairs[req.query.key]){
        res.json( {"value": pairs[req.query.key]} );
      } else{
        res.json({});
      }
    } else{
      res.status(400).send("ERROR: Provide a key");
    }
  });
}
