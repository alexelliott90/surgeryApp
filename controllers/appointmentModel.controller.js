const appointment = require('../models/appointmentModel')

//function to get all appointments, and sort them by date and time in ascending order
exports.getAppointments = (req, res) => {
    appointment.find().sort({date:1, time:1})
      .then((appointments) => {
        res.json(appointments);
      })
      .catch((err) => {
        //400 status in case of error
        res.status(400).send({message: "Error - could not get appointments"});
      });
  };

//function to get all appointments, and sort them by date and time in ascending order
//will only show date, time, and doctor (for patient security)
//only shows appointments for the next week
exports.getAnonymisedAppointments = (req, res) => {
  appointment.find().sort({date:1, time:1})
    .then((appointments) => {
      //get todays date and get the date a week from now
      let todaysDate = new Date()
      let weekAhead = new Date()
      weekAhead.setDate(todaysDate.getDate() + 7)

      //declare array to hold list of next weeks appointments
      let weekAheadAppts = []
      //loop through appointments and add appointments in the next week to the array
      for(let i = 0; i < appointments.length; i++){
        let date = new Date(appointments[i].date)
        if(date <= weekAhead){
          weekAheadAppts.push(appointments[i])
        }

      }
      //send the new array to the front end
      res.json(weekAheadAppts);
    })
    .catch((err) => {
      //400 status in case of error
      res.status(400).send({message: "Error - could not get appointments"});
    });
};

//function to get appointments for a specific user and sort them by date and time in ascending order
exports.getMyAppointments = (req, res) => {
  const query = {email: req.body.email}
  
  appointment.find(query).sort({date:1, time:1})
        .then((appointments) => {
          res.json(appointments);
        })
  }

//Function to POST a new appointment
exports.createAppointment = (req, res) => {
    //Create a new appointment
  const newAppt = new appointment({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    description: req.body.description,
    doctor: req.body.doctor,
    date: req.body.date,
    time: req.body.time,
    confirmed: req.body.confirmed
  });
  //Save new appointment to the database
  newAppt.save()
    .then((addNewAppt) => {
      //200 status to show appointment successfully added
      res.status(200).json(addNewAppt);
    })
    .catch((err) => {
      //400 status in case of error
      res.status(400).send({message: "Error - appointment could not be added"});
    });
  };

//Function to DELETE an appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await appointment.findByIdAndDelete(id);

    if (!item) {
      //404 status if not found
      return res.status(404).json({ message: 'Item not found' });
    }
    //200 status in case of success
    res.status(200).json({ message: 'Successfully deleted item' });
  } catch (error) {
    console.error(error);
    //500 status in case of server error
    res.status(500).json({ message: 'Server Error' });
  }
};

//function to update an appointment (PUT request)
exports.updateAppointment = (req, res) => {
  //retrieve item ID
  const id = req.params.id;
  //find by id and update using the id above
  appointment.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedItem) => {
        if (!updatedItem) {
        //404 error in case of failure
        return res.status(404).json({ message: "Error - could not find that Appointment" });
        }
        //in case of success, 200 status code and update the appointment
        res.status(200).json(updatedItem);
    })
    .catch((err) => {
    //404 error if appointment couldnt be updated
    res.status(400).json({ message: "Error - could not update the Appointment" });
    });
};
  