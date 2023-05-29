const mongoose = require('mongoose');

//schema for new appointment
let appointmentSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },    
    email:{
        type: String,
        required:true
    },   
    description:{
        type: String,
        required:true
    },
    doctor:{
        type: String,
        required:true
    },
    date: {
        type: String,
        required: true,
      },
    time: {
        type: String,
        required: true,
      },
    confirmed: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("appointments", appointmentSchema);