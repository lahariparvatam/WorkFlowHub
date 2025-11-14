WorkFlowHub – Full-Stack Task Management System

WorkFlowHub is a full-stack Task & Workflow Management System built using:

Spring Boot (Java) — Backend API

MySQL — Database

React.js — Frontend UI

REST API — Communication between frontend & backend

This project allows users to manage tasks, assign work, update statuses, and track progress through a simple and clean interface.

🚀 Features
✅ Backend (Spring Boot)

CRUD operations for tasks

REST API endpoints

MySQL integration

CORS enabled

Auto-timestamp for tasks

Clean architecture: Controller → Service → Repository → Model

🎨 Frontend (React.js)

Dashboard UI

Task list with status tags

Create / Update / Delete tasks

Real-time updates

API integration with backend (http://localhost:8080/api/tasks
)

🗄 Database (MySQL)

Stores all tasks in workflowhub database

Uses Spring Data JPA & Hibernate

Auto-generated IDs

LocalDateTime timestamps

📁 Project Structure
WorkFlowHub/
│── backend/
│   ├── src/main/java/com/workflowhub
│   │   ├── controller/
│   │   │   └── TaskController.java
│   │   ├── model/
│   │   │   └── Task.java
│   │   ├── repository/
│   │   │   └── TaskRepository.java
│   │   ├── config/
│   │   │   └── CorsConfig.java
│   │   └── WorkFlowHubApplication.java
│   ├── src/main/resources/application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/components/
│   │   ├── App.js
│   │   ├── TaskTable.js
│   │   └── CreateTask.js
│   ├── public/
│   │   └── index.html
│   └── package.json
│
└── README.md

🔌 Backend API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/{id}	Update task
DELETE	/api/tasks/{id}	Delete task
⚙️ How to Run the Project Locally
1️⃣ Start Backend (Spring Boot)

Open terminal:

cd WorkFlowHub/backend
mvn spring-boot:run


Backend runs at:

➡ http://localhost:8080

2️⃣ Start Frontend (React)

Open another terminal:

cd WorkFlowHub/frontend
npm install
npm start


Frontend runs at:

➡ http://localhost:3000

🧪 Testing API (Optional)

You can test APIs using:

✔ POST (Create Task)
POST http://localhost:8080/api/tasks
Content-Type: application/json

{
  "title": "Sample task",
  "description": "Testing REST client",
  "assignedTo": "Lahari"
}

✔ GET (Get All Tasks)
GET http://localhost:8080/api/tasks


🛠 Tech Stack
Backend:

Java 17

Spring Boot

Spring Data JPA

Hibernate

MySQL

Maven

Frontend:

React.js

JavaScript

Axios

HTML/CSS

🌟 Future Enhancements

User login & authentication

Employee management module

Analytics dashboard

Task reminders & notifications

Role-based access

🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

📬 Contact

Lahari Parvatam
📧 Email: (add your email)
💻 GitHub: https://github.com/lahariparvatam