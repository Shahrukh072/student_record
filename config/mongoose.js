//require the leberary
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/student_record_db');

//acquire the connection to check if it is successfull
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open', function(){
 console.log('successfully connected to the database')
});

