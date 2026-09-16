# 🏠 HomelyHub

HomelyHub is a full-stack real-estate marketplace web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to browse, list, and manage property listings for rent or sale, with secure authentication and a smooth user experience.

---

## ✨ Features

- 🔐 User authentication (Signup/Login) with JWT
- 🔑 Secure password hashing using bcrypt.js
- 🏘️ Create, view, update, and delete property listings
- 🔍 Search and filter properties by location, price, type, etc.
- 📸 Image upload support for property listings (ImageKit integration)
- 📧 Email notifications (via Nodemailer)
- 📱 Responsive UI built with React
- 🌐 RESTful API architecture

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- Tailwind CSS / CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Nodemailer for emails
- ImageKit for image hosting

---

## 📂 Project Structure

```
HomelyHub/
├── backend/
│   ├── src/
│   │   ├── Models/
│   │   │   ├── userModel.js
│   │   │   └── propertyModel.js
│   │   ├── controllers/
│   │   │   ├── authControllers.js
│   │   │   └── propertyController.js
│   │   ├── routes/
│   │   │   ├── userRoutes.js
│   │   │   └── propertyRouter.js
│   │   ├── utils/
│   │   │   ├── db.js
│   │   │   ├── token.js
│   │   │   ├── mail.js
│   │   │   ├── APIFeatures.js
│   │   │   └── ImagekitIO.js
│   │   └── index.js
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

### 1. Clone the repository
```bash
git clone https://github.com/Arpit-tyagi001/HomelyHub.git
cd HomelyHub
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder with the following variables:
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

Run the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints (Sample)

| Method | Endpoint                          | Description                |
|--------|------------------------------------|-----------------------------|
| POST   | `/api/v1/rent/user/register`       | Register a new user         |
| POST   | `/api/v1/rent/user/login`          | Login user & get JWT token  |
| GET    | `/api/v1/rent/listing`             | Get all property listings   |
| POST   | `/api/v1/rent/listing`             | Create a new property listing |
| GET    | `/api/v1/rent/listing/:id`         | Get a single property by ID |
| PATCH  | `/api/v1/rent/listing/:id`         | Update a property listing   |
| DELETE | `/api/v1/rent/listing/:id`         | Delete a property listing   |

> Note: Update this table to match your actual finalized routes.

---

## 🚀 Future Enhancements

- Payment gateway integration for booking/renting
- Admin dashboard for managing listings and users
- Reviews and ratings for properties
- Map-based property search (Google Maps API)
- Wishlist/saved properties feature

---

## 👨‍💻 Author

**Arpit Tyagi**
- GitHub: [@Arpit-tyagi001](https://github.com/Arpit-tyagi001)

---

## 📄 License

This project is licensed under the MIT License.
