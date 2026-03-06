# Internship_Project
# 📝 Collaborative Notes Application

A modern **collaborative note-taking web application** built with the **MERN Stack**.
Users can securely create, edit, search, and share notes with collaborators in real-time.

This project was developed as part of a **Software Engineering Internship Technical Assessment (Track C)**.

---

# 🚀 Features

### 🔐 Authentication

* User Registration
* Secure Login
* JWT-based Authentication
* Protected Routes

### 📝 Notes Management

* Create Notes
* Edit Notes
* Delete Notes
* Rich Text Editor

### 🤝 Collaboration

* Add collaborators to notes
* Shared notes indicator
* Multiple users can access the same note

### 🔍 Search

* Full-text search
* Instant filtering of notes

### 🎨 UI / UX

* Modern responsive UI
* Built with Tailwind CSS
* Clean sidebar navigation
* Professional dashboard layout

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router
* Context API
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* REST API

## Tools

* Git & GitHub
* Postman
* VS Code

---

# 📂 Project Structure

```
internship_project
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── public
│   └── src
│       ├── components
│       │   ├── common
│       │   │   └── ProtectedRoute.jsx
│       │   ├── editor
│       │   ├── layout
│       │   └── notes
│       │
│       ├── context
│       ├── hooks
│       ├── pages
│       │   ├── DashboardPage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── RegisterPage.jsx
│       │   └── ProfilePage.jsx
│       │
│       ├── services
│       ├── App.js
│       ├── index.js
│       └── index.css
│
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/collab-notes.git
cd collab-notes
```

---

## 2️⃣ Install Dependencies

Install both frontend and backend dependencies:

```bash
npm run install:all
```

---

## 3️⃣ Environment Variables

Create a `.env` file inside the **backend folder**.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

⚠️ Do not commit real credentials to GitHub.

---

## 4️⃣ Run Backend Server

```
npm run dev:backend
```

Backend will run on:

```
http://localhost:5000
```

---

## 5️⃣ Run Frontend

```
npm start:frontend
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🔗 API Endpoints

### Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | User login        |

---

### Notes

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/notes     | Get all notes |
| POST   | /api/notes     | Create note   |
| PUT    | /api/notes/:id | Update note   |
| DELETE | /api/notes/:id | Delete note   |

---

# 📸 Screenshots

You can add screenshots of:

* Login Page
* Dashboard
* Note Editor
* Profile Page

Example:

```
/screenshots/dashboard.png
/screenshots/editor.png
```

---


# 📦 Scripts

Root `package.json` scripts:

```
npm run install:all     # Install frontend + backend dependencies
npm run dev:backend     # Start backend server
npm start:frontend    # Start frontend
npm run build           # Build frontend
npm start               # Start backend in production
```

---

# 👩‍💻 Author

**Nipuni Kavindya**
IT Undergraduate – SLIIT


