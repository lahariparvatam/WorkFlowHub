# WorkFlowHub — Java Full-Stack Project

## Overview
WorkFlowHub is a task assignment and progress tracking system.
Backend: Spring Boot (Java 17), MySQL.
Frontend: React.js.

---

## Quick setup

### Backend
1. Install Java 17+, Maven, and MySQL.
2. Create MySQL database:
   ```sql
   CREATE DATABASE workflowhub;
   ```
3. Edit `backend/src/main/resources/application.properties` and set `spring.datasource.username` and `spring.datasource.password`.
4. Run the backend:
   ```bash
   cd backend
   mvn spring-boot:run
   ```

### Frontend
1. Install Node.js (v18+) and npm.
2. Install dependencies and start:
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. Open `http://localhost:3000`.

---

## Project structure
- backend/: Spring Boot API
- frontend/: React UI

---

## Notes
- Backend runs on port 8080, frontend on 3000.
- CORS is enabled for all origins in the controller for development.
- Remember to change DB credentials and secure CORS before deploying.
