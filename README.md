
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
