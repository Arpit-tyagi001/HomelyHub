# 🏠 HomelyHub

**HomelyHub** is a full-stack real-estate marketplace built with the **MERN stack** that enables users to discover, list, and manage properties available for rent or sale.

The application provides secure JWT-based authentication, property CRUD operations, advanced search and filtering, image uploads, and email notifications through a RESTful backend API.

---

## ✨ Features

### 🔐 Authentication & Security

* User registration and login
* JWT-based authentication
* Secure password hashing using `bcryptjs`
* Protected property management routes
* Token-based authorization

### 🏘️ Property Management

* Create property listings
* View all available properties
* View individual property details
* Update existing listings
* Delete property listings
* Support for properties available for **rent or sale**

### 🔍 Search & Filtering

* Search properties by location
* Filter by price
* Filter by property type
* Additional API-based filtering and querying

### 📸 Image Management

* Property image uploads
* Image hosting using **ImageKit**
* Support for displaying property images in listings

### 📧 Email Notifications

* Email functionality using **Nodemailer**
* Automated communication through the backend

### 📱 Responsive UI

* Responsive React-based interface
* Client-side routing with React Router
* API communication using Axios

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **React Router**
* **Axios**
* **Tailwind CSS / CSS**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**
* **Nodemailer**
* **ImageKit**

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │     React.js UI     │
                    │  React Router       │
                    │  Axios              │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │    Express.js       │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       ┌───────────┐     ┌───────────┐    ┌───────────┐
       │ MongoDB   │     │ ImageKit  │    │ Nodemailer│
       │ Database  │     │  Images   │    │   Emails  │
       └───────────┘     └───────────┘    └───────────┘
```

---

## 📂 Project Structure

```text
HomelyHub/
│
├── backend/
│   ├── src/
│   │   ├── Models/
│   │   │   ├── userModel.js
│   │   │   └── propertyModel.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authControllers.js
│   │   │   └── propertyController.js
│   │   │
│   │   ├── routes/
│   │   │   ├── userRoutes.js
│   │   │   └── propertyRouter.js
│   │   │
│   │   ├── utils/
│   │   │   ├── db.js
│   │   │   ├── token.js
│   │   │   ├── mail.js
│   │   │   ├── APIFeatures.js
│   │   │   └── ImagekitIO.js
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Arpit-tyagi001/HomelyHub.git
cd HomelyHub
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will then be available through the Vite development server.

---

## 🔌 API Endpoints

| Method   | Endpoint                     | Description                        |
| -------- | ---------------------------- | ---------------------------------- |
| `POST`   | `/api/v1/rent/user/register` | Register a new user                |
| `POST`   | `/api/v1/rent/user/login`    | Authenticate user and generate JWT |
| `GET`    | `/api/v1/rent/listing`       | Retrieve property listings         |
| `POST`   | `/api/v1/rent/listing`       | Create a property listing          |
| `GET`    | `/api/v1/rent/listing/:id`   | Retrieve a specific property       |
| `PATCH`  | `/api/v1/rent/listing/:id`   | Update a property listing          |
| `DELETE` | `/api/v1/rent/listing/:id`   | Delete a property listing          |

> **Note:** Verify the endpoint paths against the finalized backend routes before publishing the README.

---

## 🔑 Authentication Flow

```text
User
 │
 │ Register / Login
 ▼
Express API
 │
 ├── Validate credentials
 │
 ├── Hash / verify password
 │
 └── Generate JWT
        │
        ▼
      Client
        │
        │ JWT
        ▼
Protected API Routes
        │
        ▼
   MongoDB Operations
```

---

## 🧠 Key Implementation Highlights

* Implemented a **RESTful API** using Express.js.
* Used **MongoDB + Mongoose** for persistent property and user data.
* Implemented **JWT authentication and authorization** for protected routes.
* Used **bcryptjs** for secure password hashing.
* Integrated **ImageKit** for property image storage and delivery.
* Implemented reusable API filtering functionality using `APIFeatures.js`.
* Integrated **Nodemailer** for email communication.
* Built a responsive frontend using **React.js**.
* Connected the frontend and backend through REST APIs using **Axios**.

---

## 🚀 Future Enhancements

* 💳 Payment gateway integration for property booking/rental
* 🛡️ Admin dashboard for managing users and listings
* ⭐ Property reviews and ratings
* 🗺️ Map-based property search using Google Maps API
* ❤️ Wishlist / saved properties
* 🔔 Real-time notifications
* 💬 Buyer–seller messaging system
* 📊 Analytics dashboard for property owners
* ☁️ Production deployment with CI/CD

---

## 👨‍💻 Author

### Arpit Tyagi

Computer Science Engineering Student & Full-Stack Developer

**GitHub:**
https://github.com/Arpit-tyagi001

---

## 📄 License

This project is licensed under the **MIT License**.
