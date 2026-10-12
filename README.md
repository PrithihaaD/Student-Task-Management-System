# 🎓 Student Task Management System

A RESTful backend application built with Node.js, Express.js, and MongoDB for managing student tasks and user authentication.

## ✨ Features

- Task creation, viewing, updating, and deletion
- Task filtering using query parameters
- User registration and login
- Secure password hashing with bcryptjs
- JWT-based authentication
- MongoDB Atlas integration
- Swagger API documentation
- Postman API testing
- GitHub version control
- Render deployment

## 🛠️ Technologies

Backend: Node.js, Express.js
Database: MongoDB Atlas, Mongoose
Authentication: bcryptjs, JSON Web Token (JWT)
Testing & Documentation: Postman, Swagger UI
Deployment: Render
Version Control: Git, GitHub

## 📁 Project Structure

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

## 🔗 API Endpoints

### Task Management

GET     /api/tasks
POST    /api/tasks
GET     /api/tasks/:id
PUT     /api/tasks/:id
DELETE  /api/tasks/:id

### Authentication

POST    /api/auth/register
POST    /api/auth/register-many
POST    /api/auth/login

## 🔐 Authentication

Passwords are hashed using bcryptjs before being stored in MongoDB.

After successful login, the application generates a JWT token containing the user's ID and role. The token is used to authenticate protected API requests.

## 📚 Swagger Documentation

Swagger UI provides interactive documentation and testing for the APIs.

Local URL:
http://localhost:5000/api-docs

## 🗄️ Database

The application uses MongoDB Atlas.

tasks  - Stores student task information
users  - Stores registered user information

## 🚀 Getting Started

git clone https://github.com/PrithiaaD/Student-Task-Management-System.git

cd Student-Task-Management-System

npm install

node server.js

Create a .env file containing the MongoDB connection string and JWT secret.

## 🧪 Testing

The APIs were tested using Postman and Swagger UI.

## 🌐 Deployment

The backend is deployed on Render and the source code is maintained on GitHub.

## 🔮 Future Enhancements

- Complete role-based authorization
- User-specific task management
- Refresh token support
- Frontend application
- Task notifications and reminders

## ✅ Project Status

Completed, tested, and successfully deployed.
