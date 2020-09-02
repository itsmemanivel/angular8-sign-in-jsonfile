var http = require('http');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var app = express();
var port = 3000;


//cors
var corsOption = {
  origin: true,
  methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials:true,
  exposeHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true,parameterLimit: 1000000}));



//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());




app.use('/api/data', (req, res, next)=>{


  const user = {

    email : req.body.email,

    password : req.body.password
  }
  const fs = require("fs");


  const jsonString = JSON.stringify(user)


  fs.writeFile('./newUser.json', jsonString, err =>{

    if (err) {
      console.log('Error writing file', err)
  } else {
      console.log('Successfully wrote file');
      res.json({ sucess:true})
  }
  })

  // })




});

app.listen(port, (err, res) =>{

  console.log("App running on port: " + port);
});