
# Student Task Management System

A RESTful backend application developed using Node.js, Express.js, and MongoDB for managing student tasks and user authentication.

## Features

- Create, view, update, and delete tasks
- Filter tasks using query parameters
- User registration and login
- Password hashing using bcryptjs
- JWT-based authentication
- MongoDB Atlas database integration
- Swagger API documentation
- Postman API testing
- GitHub version control
- Render deployment

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- bcryptjs
- JSON Web Token (JWT)
- Swagger UI
- Postman
- GitHub
- Render

## Project Structure

```text
Student-Task-Management-System/
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── Task.js
│   └── User.js
│
├── routes/
│   ├── taskRoutes.js
│   └── authRoutes.js
│
├── swagger.json
├── server.js
├── package.json
└── package-lock.json

API Endpoints
Task APIs
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a task
GET	/api/tasks/:id	Get task by ID
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task


Authentication APIs
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/register-many	Register multiple users
POST	/api/auth/login	Login a user


Authentication
Passwords are securely hashed using bcryptjs before being stored in MongoDB.
After successful login, a JWT token is generated. The token contains the user's ID and role and is used for authentication.
Swagger Documentation
Swagger UI is available at:
http://localhost:5000/api-docs
The deployed application also provides Swagger documentation online.
Database
MongoDB Atlas is used as the database.
Main collections:
- tasks – stores task information
- users – stores user information
Running the Project
git clone https://github.com/PrithiaaD/Student-Task-Management-System.git
cd Student-Task-Management-System
npm install
node server.js

Create a .env file with the MongoDB connection string and JWT secret before running the application.
Testing
The APIs were tested using Postman and Swagger UI.
Deployment
The backend is deployed using Render.
Future Enhancements
- Complete role-based authorization
- User-specific task management
- Refresh token support
- Frontend application
- Notifications and reminders
Project Status
The backend has been developed, tested, pushed to GitHub, and deployed successfully on Render.

**I recommend this shorter version.** It looks much cleaner on GitHub and is enough for an internship/college project.














too big












Yes 😄 — let's make it really short and clean. For this project, this is enough:
# Student Task Management System

A RESTful backend application built using Node.js, Express.js, and MongoDB for managing student tasks and user authentication.

## Features

- Task CRUD operations
- Task filtering
- User registration and login
- Password hashing using bcryptjs
- JWT authentication
- MongoDB Atlas integration
- Swagger API documentation
- Postman testing
- Render deployment

## Technologies

Node.js | Express.js | MongoDB | Mongoose | JWT | bcryptjs | Swagger | Postman

## API Endpoints

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/register-many`
- `POST /api/auth/login`

## Swagger

`/api-docs`

## Database

MongoDB Atlas is used to store tasks and user information.

## Deployment

The backend is deployed on Render.

## Status

Completed and deployed successfully.

This is the version I recommend. It is short, professional, and doesn't make the GitHub README unnecessarily large.













give in attractive manager no too shrot and to long












Yes — a medium-sized, attractive README is better. Not 200 lines, but also not just 20 lines.
Use this version:
# 🎓 Student Task Management System

A RESTful backend application built using **Node.js, Express.js, and MongoDB** to manage student tasks and user authentication.

## 📌 Project Overview

The Student Task Management System provides APIs for creating, viewing, updating, deleting, and filtering student tasks. It also includes user registration, secure password hashing, and JWT-based authentication.

## ✨ Features

- 📝 Task creation and management
- 🔍 Task filtering using query parameters
- 👤 User registration and login
- 🔐 Password hashing using bcryptjs
- 🎟️ JWT-based authentication
- 🗄️ MongoDB Atlas database
- 📚 Swagger API documentation
- 🧪 Postman API testing
- 🚀 Render deployment

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Database |
| Mongoose | Database operations |
| bcryptjs | Password hashing |
| JWT | Authentication |
| Swagger | API documentation |
| Postman | API testing |
| Git & GitHub | Version control |
| Render | Deployment |

## 📂 Project Structure

```text
Student-Task-Management-System/
│
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── taskRoutes.js
│   └── authRoutes.js
├── swagger.json
├── server.js
├── package.json
└── package-lock.json

🔗 API Endpoints
Task Management
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a task
GET	/api/tasks/:id	Get task by ID
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task


Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/register-many	Register multiple users
POST	/api/auth/login	Login a user


🔐 Authentication
User passwords are securely hashed using bcryptjs before being stored in MongoDB.
After successful login, the application generates a JWT token containing the user's ID and role. The token is used for authentication when accessing protected APIs.
📚 API Documentation
Swagger UI provides interactive documentation and testing for the available APIs.
http://localhost:5000/api-docs

The deployed application also provides Swagger documentation through Render.
🗄️ Database
MongoDB Atlas is used as the database.
Main collections:
- tasks – stores student task information
- users – stores registered user information
🚀 Running the Project
git clone https://github.com/PrithiaaD/Student-Task-Management-System.git
cd Student-Task-Management-System
npm install
node server.js

A .env file is required for the MongoDB connection and JWT secret.
🧪 Testing
The APIs were tested using:
- Postman for API testing
- Swagger UI for API documentation and interactive testing
🌐 Deployment
The backend is deployed using Render and the project source code is maintained on GitHub.
📈 Future Enhancements
- Complete role-based authorization
- User-specific task management
- Refresh token support
- Frontend application
- Task notifications and reminders
✅ Project Status
Completed and successfully deployed.
