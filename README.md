# NodeJS-Express-MVC-OOP

# 📝 Assignment Task App (Node.js + Express + MVC + OOP)
  
A simple task management application built with **Node.js**, **Express**, **OOP (Object-Oriented Programming)**, and **EJS**. This app follows the **MVC (Model-View-Controller)** architecture and allows you to add, edit, and delete tasks along with their assigned officers.
<img width="1117" height="632" alt="image" src="https://github.com/user-attachments/assets/4adb7a22-43a7-428b-81e1-5dadb4267246" />


  
## 🚀 Features  
- ✅ Add, edit, and delete tasks  
- ✏️ Edit tasks using a Bootstrap modal  
- 🗂️ Organized with MVC folder structure
- 🗂️ OOP-based structure (includes inheritance & polymorphism)  
- 📱 Responsive design with Bootstrap 5  
- ⚙️ Easy to customize and extend  

## ⚙️ OOP Structure  
- Task (abstract class):
- Properties: id, title
- Method: getDetails() (abstract)
- TaskOfficer (extends Task):
- Additional properties: name, role
- Overrides: getDetails()

## ⚙️ Dependencies
- express
- ejs

## 📂 Project Structure    
<img width="721" height="146" alt="image" src="https://github.com/user-attachments/assets/22afb8d0-1707-4219-bfe0-4b2b5f1a4191" />

1. Initiate npm
   npm init -y
   
2. Install Dependencies
   npm install express ejs
   
3. Run the App
   node app.js
  
Visit the app at: http://localhost:3000 

💡 Notes 
  
Tasks are stored in memory and will be lost on server restart.  
To make data persistent, integrate a database in models/taskModel.js.  
Bootstrap 5 is included via CDN in the header.ejs partial.  


