# Task Manager Backend

This is the backend API for the Task Manager application, built with Node.js, Express, MongoDB, and Mongoose.

## Features

- User registration and authentication (JWT)
- Task CRUD operations (Create, Read, Update, Delete)
- Secure API endpoints with token-based authentication
- Password hashing with bcryptjs
- CORS enabled for frontend integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd task_manager/backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the backend folder:**
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server:**
   - For development with auto-reload:
     ```sh
     npm run dev
     ```
   - For production:
     ```sh
     npm start
     ```

5. **API will run at:**  
   `http://localhost:5000`

## Project Structure

```
backend/
├── models/         # Mongoose models (User, Task)
├── routes/         # Express route handlers (auth, tasks)
├── .env            # Environment variables (not committed)
├── server.js       # Entry point
├── package.json
└── ...
```

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT token

### Tasks

- `GET /api/tasks` — Get all tasks (auth required)
- `POST /api/tasks` — Create a new task (auth required)
- `PUT /api/tasks/:id` — Update a task (auth required)
- `DELETE /api/tasks/:id` — Delete a task (auth required)

## License

MIT