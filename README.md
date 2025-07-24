# NodeJS-Express-MVC-OOP

Todo Task App (MVC)
A simple task management application built with Node.js, Express, OOP (Object-Oriented Programming), and EJS. This app follows the MVC (Model-View-Controller) architecture and allows you to add, edit, and delete tasks along with their assigned officers.

Features
Add new tasks with officer's name and role

View task list

Edit task and officer details

Delete tasks

Responsive web interface using Bootstrap & EJS

OOP-based structure (includes inheritance & polymorphism)

OOP Structure
Task (abstract class):

Properties: id, title

Method: getDetails() (abstract)

TaskOfficer (extends Task):

Additional properties: name, role

Overrides: getDetails()

Folder Structure
cpp
Copy
Edit
models/         // OOP models & data handling
controllers/    // Application logic
routes/         // Express routes
views/          // EJS views
public/         // CSS & static files
Installation & Usage
Clone this repository

bash
Copy
Edit
git clone <repo-url>
cd Cursor-NodeJS-Express-OOP-MVC
Install dependencies

bash
Copy
Edit
npm install
Start the application

bash
Copy
Edit
node app.js
Open in browser
Visit http://localhost:3000

How to Use
Fill out the form to add a new task with officer details

Click Edit to modify a task

Click Delete to remove a task

Dependencies
express

ejs

