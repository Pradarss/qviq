require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth.route');
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const app = express();
const port = 5000;

const username = encodeURIComponent(process.env.USER);
const password = encodeURIComponent(process.env.PASSWORD);

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use( 
    session({ 
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

app.use('/', authRoutes);

// mongoose.connect("mongodb://127.0.0.1:27017/keeperDB", {useNewUrlParser: true})
mongoose.connect(`mongodb+srv://${username}:${password}@myatlasclusteredu.tkmvwoe.mongodb.net/qviq_db?retryWrites=true&w=majority&appName=myAtlasClusterEDU`)
.then(function(){
    console.log("Successfully connected to mongoDB")
})
.catch(function(err){
    console.log(err);
})

app.listen(port, function() {
    console.log("Server started on port 5000");
  });