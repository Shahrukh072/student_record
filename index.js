//require
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 8080;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const teachers = require('./routes/teacher');
const learners = require('./routes/learner');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportJwt = require('./config/passport-jwt-startegy');

//EJS
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.set('secretKey', 'api');
app.use(bodyParser.urlencoded({
    extended: false 
}));
app.use('/teachers', teachers);
app.use('/learners', validateUser, learners);


//validate jwt
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
      if (err) {
          res.json({
              status: "error",
              message: err.message,
              data: null
          });
      } else {
          req.body.userId = decoded.id;
          next();
      }
  });
}

app.get('/', function (req, res) {
  res.json({
      "body": "favourite teacher list"
  });
});


//server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});