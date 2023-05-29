var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
const { checkJWTToken, checkPasswordMatches, checkUsernameDuplicate, checkAdmin, 
    checkPasswordSecurity, checkPasswordLength} = require('./middleware');

//import controllers for login and for appointment operations
const appointmentModelController = require("../controllers/appointmentModel.controller")
const loginModelController = require("../controllers/loginModel.controller")

//Authentication Routes

//route to check if login is correct
router.post("/login", loginModelController.checkLogin)

//route to verify token
router.post("/checktoken", checkJWTToken, loginModelController.checkToken)

//Appointment Routes

//route to get the full list of appointments
router.get("/appointments", checkJWTToken, checkAdmin, appointmentModelController.getAppointments);

//route to get an anonymised (confidential) list of appointments
router.get("/anonappointments", checkJWTToken, appointmentModelController.getAnonymisedAppointments);

//route to get list of appointments for a user
router.post("/myappointments", checkJWTToken, appointmentModelController.getMyAppointments);

//route to create a new appointment (using post method)
//does not include check admin because normal users need to request appointments
//however, standard users cannot access admin area to confirm appointments which ensures security
router.post("/appointments", checkJWTToken, appointmentModelController.createAppointment);

//route to delete an appointment
router.delete("/:id", checkJWTToken, checkAdmin, appointmentModelController.deleteAppointment);

//route to update an appointment by id
router.put("/:id", checkJWTToken, checkAdmin, appointmentModelController.updateAppointment);

//Login Routes

//route to get log ins
router.get("/loginList", checkJWTToken, checkAdmin, loginModelController.getLogins);

//route to delete a patient
router.delete("/loginList/:id", checkJWTToken, checkAdmin, loginModelController.deletePatient);

//route to edit a patient
router.put("/loginlist/:id", checkJWTToken, checkAdmin, loginModelController.updatePatient);

//route to register a new user (using post method)
router.post("/loginList", checkPasswordMatches, checkUsernameDuplicate, checkPasswordLength, checkPasswordSecurity, loginModelController.createLogin);


module.exports = router;