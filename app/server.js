/*const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser     = require('body-parser');
const db             = require('./config/db').url;
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("DB connect"))
// MongoClient.connect(db.url, (err, database1) => {
//   if (err) return console.log(err)
                      
//   // Make sure you add the database name and not the collection name
//   //const database = database1.db("test")

//   require('./routes')(app, database);
                
// })

app.use( "/", require("./routes/note_routes"))

app.listen(port, () => {
  console.log('We are live on ' + port);
}); */



const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const User = require("./schema/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/db").url;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

  app.use(express.urlencoded({ extended: false }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use("/", require("./routes/users"))

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Server running on ", PORT));