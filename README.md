
# Student Task Management System

A RESTful backend application developed using Node.js, Express.js, and MongoDB for managing student tasks and user authentication.

## Project Overview

The Student Task Management System provides APIs for creating, viewing, updating, deleting, and filtering student tasks.

The system also includes user authentication with password hashing and JWT-based login.

## Features

### Task Management

- Create a new task
- Get all tasks
- Filter tasks using query parameters
- Get a task by ID
- Update a task
- Delete a task

### Authentication

- User registration
- Multiple user registration
- Password hashing using bcryptjs
- User login
- JWT token generation
- Student and Admin role structure

### API Documentation

- Swagger UI documentation
- Interactive API testing

### Database

- MongoDB Atlas
- Mongoose for database operations

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
- Git
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
POST	/api/tasks	Create a new task
GET	/api/tasks/:id	Get task by ID
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task


Authentication APIs
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/register-many	Register multiple users
POST	/api/auth/login	Login a user


Task Example
{
    "title": "Complete Assignment",
    "description": "Software Engineering assignment",
    "status": "Pending",
    "dueDate": "2026-10-15"
}

User Registration Example
{
    "name": "Test Student",
    "email": "teststudent@gmail.com",
    "password": "Test@123"
}

Authentication
Passwords are hashed using bcryptjs before being stored in MongoDB.
After successful login, the system generates a JSON Web Token (JWT).
The JWT contains the user's ID and role and is configured to expire after one hour.
The authentication middleware is used to verify JWT tokens for protected APIs.
Database Collections
The application uses MongoDB Atlas.
The main collections are:
- tasks – stores student task information
- users – stores registered user information
Passwords are not stored as plain text. They are stored as secure bcrypt hashes.
Swagger Documentation
Swagger UI is available at:
/api-docs

For local development:
http://localhost:5000/api-docs

Swagger provides documentation and an interactive interface for testing the Task and Authentication APIs.
Running the Project Locally
1. Clone the repository
git clone https://github.com/PrithiaaD/Student-Task-Management-System.git

2. Open the project
cd Student-Task-Management-System

3. Install dependencies
npm install

4. Create .env
Create a .env file in the project root:
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
PORT=5000

Do not upload the .env file or database credentials to GitHub.
5. Start the server
node server.js

The server runs on:
http://localhost:5000

6. Open Swagger
http://localhost:5000/api-docs

Testing
The APIs were tested using:
- Postman
- Swagger UI
The following operations were tested:
- User registration
- Multiple user registration
- User login
- Task creation
- Task retrieval
- Task filtering
- Task update
- Task deletion
Deployment
The backend is deployed using Render.
The deployed application provides the same REST APIs and Swagger documentation online.
Security
- Passwords are hashed using bcryptjs.
- JWT is used for authentication.
- JWT secret is stored in environment variables.
- Database credentials are stored in environment variables.
- Sensitive credentials are not included in the source code.
Future Enhancements
- Complete role-based authorization for Student and Admin users
- User profile API
- Task ownership and user-specific tasks
- Refresh token support
- Frontend application
- Task reminders and notifications
- Admin dashboard
Project Status
The backend is successfully developed, tested, pushed to GitHub, and deployed on Render.
Completed
- Node.js backend
- Express.js REST APIs
- MongoDB Atlas integration
- CRUD operations
- Query and path parameters
- Postman testing
- Swagger documentation
- User registration
- Multiple user registration
- Password hashing
- JWT login authentication
- GitHub repository
- Render deployment

**That's the complete README.** Don't add anything else.

After pasting it into `README.md`, **save the file**. Then send me a screenshot before running any Git commands.
