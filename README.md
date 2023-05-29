### Software Requirements
### System Architecture

The app will be built using the MERN stack (MongoDB, Express, React and Node) with React.js as the front end. I will integrate MongoDB with Express using Mongoose. To generate the Express back-end I will use Express Generator. Express will allow my app to read, write, update and delete data from MongoDB using a REST api. The database will be protected by user authentication, using JWT web tokens to authenticate users and allow distinction between normal users and different admin users. The app will be modular, built using components, to allow easier testing, debugging, code reuse, and maintenance.

The app will be deployed using Render to deploy the back end and Amazon Web Services (AWS) to deploy the front end. Separate deployment has the advantage that separate teams are able to work on the front and back ends of the project in a real-world scenario. I have also made this work in past tasks after spending many hours troubleshooting, and will be a good alternative to the Heroku explanations included in the course materials (Heroku unfortunately now comes at significant cost).

I will use Bootstrap to style my app, which I believe results in great looking websites and allows easy responsive design.

### System Requirements
### Overview

The app will an appointment booking system for a doctor’s surgery. After registration and authentication, normal users will be able to view appointments (with information about other patients kept confidential). Admin users will be able to view all information and will be able to make, cancel or edit any appointment and also edit patient information. This reflects how doctors surgeries work in practise, whereby patients need to contact admin to make an appointment.

When a user enters the home page, they will be prompted to log in or register. Once logged in they will be able to see all of the appointments (anonymised) and will be able to contact the admin to request an appointment.

If an admin logs into the app, they will be able to view all current appointments. If they click on an appointment, they will be able to see all information about that appointment. Admin users will also be able to create, edit and delete appointments. Admin users will also be able to see all appointment requests from patients.

### Who will use the app and how they benefit from it

Doctor’s surgeries will sign up to this app, and will use it for patient management. Some surgeries still use paper and spreadsheets to manage their appointments. The key benefits will come from the increased security of patient information, and the gain in efficiency from using this over their current processes. The platform will also make it easier for patients to book appointments, rather than waiting on a phone line which is the current process for many surgeries and results in patient frustration.

### What other software is out there and how this is different

There are two key platforms currently used by surgeries - My GP and Patient access. In past I have personally used patient access and I find it slow and difficult to use. Both of these platforms come with a large number of features which are not useful for the vast majority of patients who just want to book an appointment (e.g. in app messaging, and links to a pharmacy). The key consideration for a GP booking system should be simplicity, because the majority of patients are of the older age demographics and often do not appreciate complex applications. My app will follow this principle and take a much more streamlined and slimmed down approach. It will fill the current gap in the market between ‘spreadsheets and paper’ and complex apps. As a result it will be far cheaper for GP surgeries to implement, which is another key consideration for our cash-strapped health services.

### Functional Requirements

The project requirements for the capstone are detailed as follows:

1. It is built using Express, React, and MongoDB (the MERN stack).
2. It creates, reads, updates, and deletes (CRUD) information from MongoDB.
3. It has a custom server built using Express.
4. It authenticates users using at least three passport strategies (e.g. using Google, Facebook, or a normal username and password) – note that on the HyperionDev discord (link https://discord.com/channels/577460436316717056/1006835512583135242/threads/1052135168917393438) it is stated that this is no longer a requirement.
5. The front-end is built using React. You can use a React framework (e.g. Create React App or Next.js) of your choice.
6. The application allows for normal end-user access and admin access. An administrator should be able to monitor and make changes to users’ behaviour.
Functional requirements that I will need to include:
7. Database - The app must interact with a secure database
8. User Registration and Authentication – provide a way for users to register and then to log in and have secure access to their appointments
9. Admin Registration and Authentication – provide a way for administrators to log in and have a separate set of access rules to allow them to add, edit, and delete appointments
10. User administration – allow admin users to remove a user from the system and edit information about a user
11. Appointment Addition – allow admin to add appointments
12. Appointment Display – allow users to view their appointments, and admin to view all appointments
13. Appointment Deletion – allow admin to delete appointments
14. Appointment Editing – allow admin to edit appointments
15. Communication – allow users to contact admin to request an appointment

### Non-functional requirements

### Usability

1. User-Friendly Interface - It will have an intuitive and easy-to-use interface, ensuring that users can navigate the app and understand quickly where things are. Tasks will be performed efficiently and without confusion. Help will be easy to find via intuitive links, which will display help to the user and also contact details for further assistance.
2. Accessibility - It will be designed to accommodate users with varying abilities. There will to be support for accessibility features such as screen readers.
3. Responsive Design - It will to be responsive and compatible with different screen sizes meaning that it is user-friendly across different devices.

### Reliability

1. Stability - It will be stable and reliable. It will be quick to load and will not crash. If there are problems, then user will be informed as to what the issue is (i.e. errors will be descriptive)
2. Data - It will ensure that data is not lost or corrupted, by using MongoDB to store data and by using appropriate error handling in the app
Performance
3. Responsiveness - it will respond quickly to the user’s interactions with the app, ensuring quick execution of functions, such as adding, editing or deleting tasks
4. Loading – it will load quickly, ensuring that the user does not need to wait long to carry out functions or to access the app
5. Scalability – it will be designed to handle an increasing number of appointments and users whilst ensuring robust performance throughout

### Security

1. Authentication and Authorisation – there will be robust authentication mechanisms including authentication via a valid JSON Web Token (JWT) for both users and admin users, to protect users, their information, and the platform from unauthorised access
Security Updates - it will have regular security updates to protect against vulnerability and security risks as they occur
2. Privacy Protection - it will follow privacy laws, ensuring that user information and data is securely handled and stored, and that no user information is shared with without their permission
3. Helmet – the app will use helmet in the express back end, to increase security further

### User Stories

1. User registration - Andy enters the app to register an account. He add his details to register for an account and the system assigns the user an account, and creates a new user record.
2. User appointment booking – John fills in an intuitively displayed form which allows him to enter details of an appointment they would like to book. The system them saves these details, and displays them to an admin user who can then book an appointment for the user.
3. Retrieve appointments - Amy enters the app and logs in using her user details. If she fails to log in with incorrect username or password, the system will notify her of the error. After logging in, the system retrieves her appointments and also displays the appointments in the system (with anonymised data).
4. Edit appointment – once logged in, Anna, who is an admin, can see the list of appointments. Each appointment has an option delete the appointment, and Anna can also select an appointment to edit. Anna edits the appointment by selecting the appropriate appointment and then changing the date and details. The system updates these details in the database, and updates the display for Anna which will also update the details to be viewed by the patient who the appointment is for.
5. Delete appointment – James navigates to one of the appointments and views the record. James deletes the appointment by clicking on an intuitive delete button. The system deletes the appointment from the database, and updates the display for admin users.

### How to use the app

## Admin Users

- Admin users must first register and then request admin rights via IT support
- Admin rights will be granted, allowing an admin user access to the admin sections of the platform
- Head to the home page and log into the platform
- There are two pages which you can use for surgery admin:

1. Patient Admin - this section allows you to view the current list of patients, and to edit information about any of the patients. You can also delete a patient if they are no longer part of the surgery. In this section you are also able to view a list of the other admin users in the surgery. Please note that you are unable to directly edit admin users details. Please contact IT support who will be able to assist.
2. Appointment Admin - this section allows you to view the current list of appointments, and the current list of appointments which have been requested by patients. You can then add appointments, or edit or delete appointments which are currently booked.

## Patients (standard users)

- Patients must first register on the home page
- Once registered, patients can log into the platform
- On the 'my appointments' page, patients will be able to view the current list of appointments at the surgery (without patient information or any descriptions)
- Patients can then request an appointment on this page, which will create a new request in the admin section which an admin user will be able to see. An admin user can then either approve the appointment or suggest a modified appointment for the patient. Once approved, the patient will be able to see this appointment on their 'my appointments' page

## General

- There is a help page, containing useful information for patients

### How to install, run and test the platform

To install this app, you will need to set up a MongoDB cluster, and install the back end and front end files on your machine. This can be done as follows:

1. Copy all of the project files into a folder on your machine
2. Navigate to this folder and type 'npm install'
3. Navigate to the 'frontend' folder and type 'npm install'

4. Head to https://docs.atlas.mongodb.com/getting-started/ - If you have a MongoDB account, log in, otherwise please create a new, free, cluster
5. Open the new cluster, and click the 'connect' button
6. Click the option 'mongoDB for VS code'
7. Copy the connection string and place this in the app.js file in the back end replacing the connection string in the line 'mongoose.connect'
8. You will need to include the password to your cluster in the connection string - paste this into where it shows <password> in the connection string

9. Navigate to the back end folder (the root directory of the project) and type npm start. The terminal should inform you that the server has started and the database has successfully connected
10. Navigate to the 'frontend' folder and type npm start. The front end should open in your browser and you can now use the app!

## Testing

XXXX

### Security Measures

- Helmet has been used to secure the express server
- JWT tokens are used to authenticate users. It is not possible to view any information from the database without a valid JWT token
- Admin users have a separate layer of authentication within the JWT token. If a user is not an admin user, they are unable to view patient information or to create a 'confirmed' appointment, read or edit information about patients or appointments. Standard users are only able to create appointment requests (unconfirmed appointments) and read anonymised appointment data, or view their own appointments

### Third Party APIs

- No third party APIs have been used in the development of this app

### Deployment and link

This app has been deployed using using Render to deploy the back end and Amazon Web Services (AWS) to deploy the front end. Separate deployment has the advantage that separate teams are able to work on the front and back ends of the project in a real-world scenario. I have also made this work in past tasks after spending many hours troubleshooting, and it is a good alternative to the Heroku explanations included in the course materials (Heroku unfortunately now comes at significant cost).

