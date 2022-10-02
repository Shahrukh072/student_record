const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;


//Teacher schema
const TeacherSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
});

// hash the user password 
TeacherSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

//exports
module.exports = mongoose.model('teacher', TeacherSchema);