const Login = require('../models/loginModel')
let jwt = require("jsonwebtoken");

//function to get all log in items
exports.getLogins = (req, res) => {
    Login.find()
      .then((logins) => {
        res.json(logins);
      })
      .catch((err) => {
        res.status(500).json({ message: "Error - log in details not retrieved" });
      });
  };

let emailCorrect = false
let passwordCorrect = false

//function to check the log in and if correct, get a token
//will also send a message if the user has input incorrect email / password / both
exports.checkLogin = (req, res) => {
  let tokenEmail = ""
  let tokenPassword = ""
  let tokenAdmin = false
  let userFirstname = ""
  let userLastname = ""
  
  Login.find()
    .then((logins) => {
        //search for the user and check username and password
        for(let i=0 ; i < logins.length ; i++){
            if(logins[i].email == req.body.email && logins[i].password == req.body.password){
                emailCorrect = true
                passwordCorrect = true

                tokenEmail = logins[i].email
                tokenPassword = logins[i].password
                tokenAdmin = logins[i].admin
                userFirstname = logins[i].firstname
                userLastname = logins[i].lastname
            }else if (logins[i].email == req.body.email){
                emailCorrect = true
            }else if (logins[i].password == req.body.password){
                passwordCorrect = true
            }else{}
        }
        //if both username and password are correct, generate  token
        if(emailCorrect === true && passwordCorrect === true){
            let jwtToken = jwt.sign(
                {
                  email: tokenEmail,
                  password: tokenPassword,
                  admin: tokenAdmin
                },
                  process.env.TOKEN_KEY,
                { expiresIn: "1h" }
            )
                res.status(200).send({
                  token:jwtToken,
                  firstname: userFirstname,
                  lastname: userLastname
                })
        //else if the email is correct, the password must be incorrect
        }else if(emailCorrect === true){
            res.status(403).send({message: 'Error - Incorrect password!'})
        //else if the password is correct, the email must be incorrect
        }else if(passwordCorrect === true){
            res.status(403).send({message: 'Error - Incorrect email!'})
        //else, both are incorrect
        }else{res.status(403).send({message: 'Error - Incorrect log in details!'})}
        
        emailCorrect = false
        passwordCorrect = false
        tokenEmail = ""
        tokenPassword = ""
        tokenAdmin = ""
      })
    .catch((err) => {
        //res.status(500).send({'err':'user information incorrect!'});
    });
}

//Function to POST a new log in for user registration
exports.createLogin = (req, res) => {
    //Create a new user
  const newLogin = new Login({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    admin: false,
  });
  //Save new user details to the database
  newLogin.save()
    .then((addNewLogin) => {
      //200 status to show successfully added
      res.status(200).send({ message: "Registration Success" });
    })
    .catch((err) => {
      //400 status in case of error
      res.status(400).send({ message: "Error - login could not be added" });
    });
  };

exports.checkToken = (req, res) => {
  res.status(200).send({ message: "User verified"})
}

//Function to DELETE a user
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Login.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    //200 status in case of success
    res.status(200).json({ message: 'Successfully deleted patient' });
  } catch (error) {
    console.error(error);
    //500 status in case of server error
    res.status(500).json({ message: 'Server Error' });
  }
};

//function to update a users details (PUT request)
exports.updatePatient = (req, res) => {
  //retrieve id of user
  const id = req.params.id;
  //find by id and update using the id above
  Login.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedItem) => {
        if (!updatedItem) {
        //404 error in case of failure
        return res.status(404).json({ message: "Error - could not find that Patient" });
        }
        //in case of success, 200 status code and update the appointment
        res.status(200).json(updatedItem);
    })
    .catch((err) => {
    //404 error if appointment couldnt be updated
    res.status(400).json({ message: "Error - could not update the Patient" });
    });
};