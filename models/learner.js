const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

//learner schema
const LearnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: true

});

//exports
module.exports = mongoose.model('learner', LearnerSchema);