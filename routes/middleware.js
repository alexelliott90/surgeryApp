let jwt = require("jsonwebtoken");
const Login = require('../models/loginModel')

//middleware to check the JWT token to ensure user cannot access certain functions without a valid token
function checkJWTToken(req, res, next) {
    if (req.headers.token) {
        let token = req.headers.token;
        jwt.verify(token, process.env.TOKEN_KEY, function (error, data) {
            if (error) {
                res.send({ message: "Invalid Token" });
            } else {
                req.email = data.email
                req.password = data.password
                req.admin = data.admin
                next();
            }
        });
    } else {
        res.send({ message: "Please log in" });
    }
}

//middleware to check the JWT token to see if user is an admin
function checkAdmin(req, res, next) {
        const token = req.headers.token
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        if (decoded.admin){
            next()
        }else{
            res.status(403).send(
            {message: "This area can only be accessed by admin"})
        }
        }catch (e) {
            res.sendStatus(401)}
}

//middleware to check registration passwords match
function checkPasswordMatches(req, res, next){
    if(req.body.password == req.body.password2){
        next()
    }else{
        res.send({message: "Error - passwords do not match"})
    }
}

//middleware to check password length on registration
function checkPasswordLength(req, res, next){
    let password = req.body.password
    if(password.length >= 12){
        next()
    }else{
        res.send({message: "Password needs to be 12 characters or more"})
    }
}

//middleware to check for letters and numbers - password needs to be a combination of numbers and letters
function checkPasswordSecurity(req, res, next){
    let password = req.body.password
    let strings = false
    let numbers = false
    for(let i = 0; i < password.length; i++){
        if(Number.isInteger(Number(password[i]))){
            numbers = true
        }else{
            strings = true
        }
    }
    //check if both numbers and characters have been used
    if(numbers == false || strings == false){
        res.send({message: "Please include both numbers and letters"})
    } else{
        next()
    }
}

let duplicateUsername = false

//middleware to check if the user is already registered
//checks for duplicate log in username and sends error if already registered
function checkUsernameDuplicate(req, res, next){
    Login.find()
    .then((logins) => {
        for(let i=0 ; i<logins.length ; i++){
            if(logins[i].email == req.body.email){
                duplicateUsername = true
            }
        }
        if(duplicateUsername == true){
            res.send({message: "Email already registered!"})
        }else{
            next()
        }
    })
}

//export the above modules
module.exports = {
    checkJWTToken, checkPasswordMatches, checkUsernameDuplicate, checkAdmin, checkPasswordLength, 
    checkPasswordSecurity,
};