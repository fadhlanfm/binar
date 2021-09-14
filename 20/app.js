const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

// app.set("view engine", "ejs")

const port = 3000;
const router = require("./routes/index");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/', router)

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(port, () => {console.log(`example listening in port ${port}`)})
