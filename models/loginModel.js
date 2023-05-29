const mongoose = require('mongoose');

//schema for log in details
let loginSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model("Logins", loginSchema);