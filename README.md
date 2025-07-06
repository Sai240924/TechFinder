# TechFinder Project

This project is organized into two main parts:  
- **frontend**: React application built with Vite and styled with Tailwind CSS  
- **backend**: Node.js Express server connected to MongoDB  

---

## Dependencies

### Frontend Dependencies
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- React
- Vite
- Tailwind CSS
- Other dependencies listed in `frontend/package.json`

### Backend Dependencies
- Node.js (v16 or higher recommended)
- npm
- Express
- Mongoose (MongoDB ODM)
- CORS
- dotenv
- nodemon (for development)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TechFinder
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

---

## Configuration

1. Create a `.env` file in the `backend` folder with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=5000
   ```

   Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

---

## Running the Project

### Start the Backend Server

From the `backend` folder, run:
```bash
npm run dev
```
This will start the Express server with nodemon on port 5000.

### Start the Frontend Development Server

From the `frontend` folder, run:
```bash
npm run dev
```
This will start the Vite development server, which proxies API requests to the backend.

---

## Testing the Setup

- Visit `http://localhost:5000/api/hello` to test the backend API endpoint.
- Use the frontend app normally; API requests to `/api` will be proxied to the backend.

---
## Preview

https://github.com/user-attachments/assets/02e77015-c38e-4a42-8ce0-2d15aaa5121d

---
## Notes

- Make sure MongoDB is running and accessible via the connection string.
- You can customize ports and other settings in the `.env` file and `vite.config.ts`.