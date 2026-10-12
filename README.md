
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

se this cleaner version. It will look much better on GitHub:
## 🔗 API Endpoints

### 📋 Task Management

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `GET` | `/api/tasks/:id` | Get task by ID |
| `PUT` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### 🔐 Authentication

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `POST` | `/api/auth/register` | Register a user |
| `POST` | `/api/auth/register-many` | Register multiple users |
| `POST` | `/api/auth/login` | Login a user |

---

## 🔐 Authentication

Passwords are securely hashed using **bcryptjs** before being stored in MongoDB.

After successful login, the application generates a **JWT token** containing the user's ID and role. The token is used to authenticate protected API requests.

---

## 📚 API Documentation

**Swagger UI**

```text
http://localhost:5000/api-docs

Swagger provides interactive API documentation and testing for both Task Management and Authentication APIs.
🗄️ Database
The application uses MongoDB Atlas with Mongoose.
Collection	Purpose
tasks	Stores student task information
users	Stores registered user information


🚀 Getting Started
git clone https://github.com/PrithiaaD/Student-Task-Management-System.git
cd Student-Task-Management-System
npm install
node server.js

Create a .env file with the required MongoDB connection string and JWT secret before starting the application.
🧪 Testing
The APIs were tested using:
- Postman — API development and testing
- Swagger UI — API documentation and interactive testing
🌐 Deployment
The backend is deployed using Render, with the source code maintained on GitHub.
🔮 Future Enhancements
- Role-based authorization
- User-specific task management
- Refresh token support
- Frontend application
- Task notifications and reminders
✅ Project Status
Completed, tested, and successfully deployed.

 
