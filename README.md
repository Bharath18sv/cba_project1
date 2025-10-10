# E-Commerce Platform
=======
# SnapCart

A full-stack e-commerce application built with React.js frontend and Node.js/Express backend, featuring user authentication, product management, order processing, and admin dashboard.

## 🚀 Features

### User Features
- **User Authentication**: Sign up, sign in, and profile management
- **Product Browsing**: View products with search and filtering capabilities
- **Shopping Cart**: Add/remove items and manage cart contents
- **Order Management**: Place orders and view order history
- **Product Details**: Detailed product information and images
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Dashboard**: Analytics and overview of sales, orders, and users
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and manage all customer orders
- **User Management**: View and manage user accounts
- **Image Upload**: Cloudinary integration for product images

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **JWT Decode** - JWT token handling
- **Heroicons & Lucide React** - Icon libraries
- **Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── server/                  # Node.js backend application
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── db/               # Database configuration
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash

   git clone https://github.com/Bharath18sv/SnapCart.git
   cd snapcart

   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in the server directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   Create `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/admin` - Get all orders (Admin)
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin)

## 🔐 Authentication & Authorization

The application uses JWT (JSON Web Tokens) for authentication and role-based access control:

- **User Role**: Can browse products, manage cart, place orders
- **Admin Role**: Can manage products, orders, and users

## 🎨 Key Components

### Frontend Components
- **Layout**: Main layout wrapper with navigation
- **Navbar**: Navigation bar with user menu
- **ProductList**: Product grid display
- **Cart**: Shopping cart management
- **AdminDashboard**: Admin analytics dashboard
- **ProtectedRoute**: Route protection based on user roles

### Backend Models
- **User**: User account information
- **Product**: Product details and inventory
- **Order**: Order information and status

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
```
The built files will be in the `dist` folder, ready for deployment to platforms like Vercel, Netlify, or any static hosting service.

### Backend Deployment
The backend can be deployed to platforms like:
- Heroku
- Railway
- DigitalOcean
- AWS

Make sure to set up environment variables on your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Bharath S V - Initial work

## 🙏 Acknowledgments

- React.js community
- Tailwind CSS for the beautiful UI framework
- MongoDB for the database solution
- Cloudinary for image storage services

