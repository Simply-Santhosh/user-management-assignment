# User Management

Full-stack user management application with a React frontend and a Node.js REST API backed by MySQL.

## Project Structure

```
project/
├── backend/          # Express API + Sequelize + MySQL
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── FrontEnd/         # React + TypeScript + Vite
    └── src/
        ├── components/
        └── services/
```

## Prerequisites

- Node.js (v18 or later recommended)
- MySQL server
- npm

---

## Backend

REST API server built with Node.js, Express, and Sequelize.

### Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **ORM:** Sequelize
- **Database:** MySQL
- **Other:** CORS, dotenv

### Setup

1. Go to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in `backend/`:

   ```env
   DB_NAME=your_database_name
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_HOST=localhost
   PORT=3050
   ```

3. Create the MySQL database:

   ```sql
   CREATE DATABASE your_database_name;
   ```

   Sequelize syncs the `users` table automatically on startup.

### Run

```bash
npm start
```

Or:

```bash
npm run dev
```

The server runs on the port defined in `PORT` (default: `3050`).

On success:

```
Database Connected Successfully
Server running on port 3050
```

### API Endpoints

#### Get all users

```
GET /api/users
```

**Response (200):**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "first_name": "John",
      "company_name": "Acme Inc",
      "role": "Developer",
      "country": "USA"
    }
  ]
}
```

**Error (500):**

```json
{
  "success": false,
  "message": "Failed to fetch users"
}
```

### User Model

| Column         | Type    | Notes                       |
|----------------|---------|-----------------------------|
| `id`           | INTEGER | Primary key, auto-increment |
| `first_name`   | STRING  | Required                    |
| `company_name` | STRING  | Optional                    |
| `role`         | STRING  | Optional                    |
| `country`      | STRING  | Optional                    |

Table name: `users` (timestamps disabled).

### Environment Variables

| Variable      | Description             |
|---------------|-------------------------|
| `DB_NAME`     | MySQL database name     |
| `DB_USER`     | MySQL username          |
| `DB_PASSWORD` | MySQL password          |
| `DB_HOST`     | MySQL host              |
| `PORT`        | Port the API listens on |

---

## Frontend

React single-page app for browsing and managing users in a table-based UI.

### Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build tool:** Vite 8
- **HTTP client:** Axios
- **Linting:** ESLint

### Setup

```bash
cd FrontEnd
npm install
```

### Run

```bash
npm run dev
```

Vite serves the app at `http://localhost:5173` by default.

### Available Scripts

| Script            | Description                         |
|-------------------|-------------------------------------|
| `npm run dev`     | Start Vite dev server with HMR      |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint on the codebase          |

### Features

- **User table** — Displays name, company, role, and country
- **Search** — Filter users by name, company, role, or country
- **Refresh** — Re-fetch users from the API
- **Add user** — Adds a sample user to local state (client-side only)
- **Delete user** — Removes a user from local state (client-side only)

### API Integration

User data is fetched in `FrontEnd/src/services/api.ts`. By default the app calls the [DummyJSON](https://dummyjson.com) public API:

```
GET https://dummyjson.com/users
```

To connect to the local backend instead, update `api.ts`:

```typescript
const response = await axios.get("http://localhost:3050/api/users");
return response.data.data;
```

> **Note:** The DummyJSON response shape (`firstName`, `company.name`, etc.) differs from the backend response (`first_name`, `company_name`, etc.). Adjust `UserRow.tsx` and filtering logic in `App.tsx` when switching to the backend API.

### Production Build

```bash
npm run build
```

Output is written to `FrontEnd/dist/`. Preview locally with:

```bash
npm run preview
```

---

## Running the Full Stack

1. Start MySQL and ensure the database exists.
2. In one terminal, start the backend:

   ```bash
   cd backend
   npm start
   ```

3. In another terminal, start the frontend:

   ```bash
   cd FrontEnd
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Troubleshooting

- **Database connection failed** — Verify MySQL is running and `.env` credentials are correct.
- **Port already in use** — Change `PORT` in `backend/.env` or stop the conflicting process.
- **Empty user list** — Seed the `users` table or connect the frontend to DummyJSON (default).
- **Add/delete not persisted** — Those actions update React state only; backend endpoints for create/delete are not implemented yet.
