# 🎭 Show Management System – Server

This is the backend (server-side) of a full-stack web application designed to manage theatrical shows. The system supports user registration, practice scheduling, file management, and ticket booking, providing a centralized platform for various roles involved in show production.

---

## 🚀 Overview

The system provides role-based functionalities for the following user types:

- **Simple User**: Can view upcoming shows and purchase tickets.
- **Director**: The owner of a show, responsible for managing actors, coaches, providers, practices, and shows.
- **Coach**: Works under a director to prepare actors for the show.
- **Actor**: Participates in practices and performs in shows.
- **Provider**: Supplies essential products (e.g., costumes, sound equipment) for the show.
- **Manager**: Oversees the entire system and registers new directors.

---

## 🏗️ Project Structure

This server is built using **Node.js** and **Express**, with MongoDB as the database. Authentication is role-based and enforced using middleware.

### Main Components

- **Controllers**: Handle HTTP requests and route logic for different user roles.
- **Services**: Contain business logic for each user type.
- **Middleware**: Includes authentication to enforce role-based access.
- **Models**: Define MongoDB schemas (e.g., for uploaded files).

---

## 📁 Controllers

### 🔹 User Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/orderticket` | POST | Purchase tickets for a specific show |
| `/shows` | GET | Retrieve all upcoming shows |
| `/join` | POST | Register a new candidate (for any role) |
| `/login/manager` | POST | Manager login |
| `/login/director` | POST | Director login |
| `/login/actor` | POST | Actor login |
| `/login/coach` | POST | Coach login |
| `/login/provider` | POST | Provider login |

### 🔹 Actor Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/actor/practices/:actorId` | GET | Get all practices for a specific actor |
| `/actor/details/:id` | GET | Get actor’s personal details |

### 🔹 Coach Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/coach/practices/:coachId` | GET | Get all practices for a specific coach |
| `/coach/actors/:coachId` | GET | Get all actors assigned to a coach |
| `/coach/details/:id` | GET | Get coach’s personal details |

### 🔹 Director Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/director/signUp/coach` | POST | Create a new coach |
| `/director/signUp/actor` | POST | Create a new actor |
| `/director/signUp/provider` | POST | Create a new provider |
| `/director/show` | POST | Create a new show |
| `/director/practice` | POST | Schedule a practice |
| `/director/practices` | GET | Get all practices |
| `/director/practices/:practiceId` | PUT | Update a practice |
| `/director/actors` | GET | Get all actors |
| `/director/coaches` | GET | Get all coaches |
| `/director/providers` | GET | Get all providers |
| `/director/details/:id` | GET | Get director’s personal details |
| `/director/upload` | POST | Upload a file to MongoDB |
| `/director/uploaded-files` | GET | List uploaded files |
| `/director/uploaded-files/:id` | GET | Download a specific file |

### 🔹 Provider Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/provider/details/:id` | GET | Get provider’s personal details |

### 🔹 Manager Controller

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/signUp/director` | POST | Register a new director |
| `/manager/details/:id` | GET | Get manager’s personal details |

---

## 🛡️ Authentication

All endpoints are protected by role-based middleware:
```js
checkAuth("role")
```
Roles include:
- `"simple"`
- `"director"`
- `"coach"`
- `"actor"`
- `"provider"`
- `"manager"`

Middleware ensures only authorized users can access role-specific routes.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT or role-based middleware
- **File Uploads**: `multer` with in-memory storage to MongoDB

---

## 📌 Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd show-management-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - `.env` should include MongoDB URI, JWT secret, etc.

4. Start the server:
   ```bash
   node app.js
   ```

---

## 🧪 Testing

You can test the endpoints using Postman or any REST client. Ensure to include authentication headers with the appropriate roles for restricted routes.
