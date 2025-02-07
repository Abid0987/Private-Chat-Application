# Private Chat Application

A real-time private chat application built with **React.js** (frontend), **Node.js** (backend), and **Socket.IO** for real-time communication. This application allows users to send and receive messages in real-time, similar to popular messaging apps like WhatsApp or Messenger.

---

## Features

- **Real-Time Messaging**: Send and receive messages instantly using Socket.IO.
- **User-Friendly Interface**: Simple and intuitive UI for seamless communication.
- **Scalable Backend**: Built with Node.js and Express for handling multiple users.
- **Cross-Platform**: Works on any device with a modern web browser.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Socket.IO Client
  - Axios (for HTTP requests)
  - CSS for styling

- **Backend**:
  - Node.js
  - Express.js
  - Socket.IO Server
  - MongoDB (for storing messages, optional)

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (optional, for message storage)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Abid0987/Private-Chat-Application.git
cd private-chat-app

### 2. Set Up the Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add your MongoDB connection string (if using MongoDB):
   ```env
   MONGO_URI=mongodb://localhost:27017/chat-app
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### 3. Set Up the Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

---

## Folder Structure

```
private-chat-app/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Logic for handling routes
│   ├── models/          # Database models (e.g., User, Message)
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions (e.g., Socket.IO setup)
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
│
├── frontend/
│   ├── public/          # Static assets (e.g., index.html)
│   ├── src/             # React components and logic
│   │   ├── components/  # Reusable components (e.g., ChatWindow, UserList)
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point for React app
│   │   └── styles.css   # Global styles
│   └── package.json     # Frontend dependencies
│
├── .gitignore           # Files and folders to ignore in Git
└── README.md            # Project documentation
```

---

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication.
- [React.js](https://reactjs.org/) for building the frontend.
- [Node.js](https://nodejs.org/) for the backend server.

---

### Find Me on:
<p align="left">
  <a href="https://github.com/Abid0987" target="_blank"><img src="https://img.shields.io/badge/Github-blue?style=for-the-badge&logo=github"></a>
  <a href="https://www.hackerrank.com/mdabid224499" target="_blank"><img src="https://img.shields.io/badge/hackerrank-black?style=for-the-badge&logo=hackerrank"></a>
  <a href="https://leetcode.com/black_hate/" target="_blank"><img src="https://img.shields.io/badge/leetcode-black?style=for-the-badge&logo=leetcode"></a>
  <a href="https://www.linkedin.com/in/abid-hasan-99345b26a/" target="_blank"><img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin"></a>
</p>

---
