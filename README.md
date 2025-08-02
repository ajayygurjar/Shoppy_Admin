# Shoppy Admin

A comprehensive admin dashboard for managing an e-commerce platform built with React, Redux Toolkit, and Firebase.

## 🚀 Features

- **Admin Authentication**: Secure login system with Firebase Authentication
- **Product Management**: Add, edit, delete, and view products with categories
- **Category Management**: Create and manage product categories with images
- **Order Management**: View and update order statuses in real-time
- **Responsive Design**: Built with React Bootstrap for mobile-friendly interface
- **Real-time Data**: Firebase Realtime Database integration

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **UI Framework**: React Bootstrap 5.3.6
- **HTTP Client**: Axios
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication
- **Build Tool**: Vite

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- Firebase project with Realtime Database enabled
- Firebase Authentication configured

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajayygurjar/Shoppy_Admin
   cd admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Realtime Database
   - Update the API key in `src/components/Auth/Auth.jsx`:
     ```javascript
     const API_Key = 'YOUR_FIREBASE_API_KEY';
     ```

4. **Configure Admin Access**
   - Update the admin emails in `src/components/Auth/Auth.jsx`:
     ```javascript
     const adminEmails = ['ayan@g.com', 'aman@gmail.com'];;
     ```

## 🚀 Getting Started

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Preview production build**
   ```bash
   npm run preview
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Auth.jsx              # Admin login component
│   ├── Layout/
│   │   ├── Header.jsx            # Navigation header
│   │   └── RootLayout.jsx        # Main layout wrapper
│   └── Pages/
│       ├── HomePage.jsx          # Dashboard home page
│       ├── ProductPage.jsx       # Product management
│       ├── CategoryPage.jsx      # Category management
│       └── OrderPage.jsx         # Order management
├── store/
│   ├── authSlice.jsx            # Authentication state management
│   └── index.jsx                # Redux store configuration
├── App.jsx                      # Main application component
└── main.jsx                     # Application entry point
```

## 🔐 Authentication

The application uses Firebase Authentication with email/password. Only predefined admin emails can access the dashboard:

- Login is restricted to authorized admin emails
- Authentication state is managed with Redux
- Protected routes redirect to login if not authenticated
- Token persistence using localStorage

## 📊 Features Overview

### Product Management
- Add new products with title, description, price, image, and category
- Edit existing products
- Delete products
- View all products in a responsive table
- Image preview functionality

### Category Management
- Create product categories with titles and images
- Edit existing categories
- Delete categories
- Visual category management with image thumbnails

### Order Management
- View all customer orders
- Update order status (placed, pending, processing, delivered, cancelled)
- View order items with product images
- Track order dates and payment methods
- Status update restrictions for completed/cancelled orders

## 🔗 Firebase Configuration

The application connects to Firebase Realtime Database with the following structure:

```
/categories
  /{categoryId}
    - title: string
    - imageUrl: string

/products
  /{productId}
    - title: string
    - description: string
    - price: number
    - imageUrl: string
    - category: string

/orders
  /{orderId}
    - status: string
    - paymentMethod: string
    - totalAmount: number
    - orderDate: string
    - items: array
```

## 🎨 UI Components

Built with React Bootstrap components:
- Responsive navigation with Navbar
- Form controls for data input
- Tables for data display
- Buttons and alerts for user interactions
- Container and Grid system for layout

## 🔒 Security Features

- Admin-only access control
- Firebase Authentication integration
- Protected routes
- Input validation
- Error handling for API requests

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**
   - Netlify
   - Firebase Hosting
   - GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_DATABASE_URL=your_database_url
```

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Error**: Ensure Firebase API key is correct
2. **Database Connection**: Verify Firebase Realtime Database rules
3. **Admin Access Denied**: Check if email is in adminEmails array
4. **Build Errors**: Clear node_modules and reinstall dependencies

## 👨‍💻 Author

**Ajay Gurjar**
- GitHub: [@ajayygurjar](https://github.com/ajayygurjar)
- Email: ajay1651@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for backend services
- Bootstrap team for the UI components
- Redux Toolkit for state management


## 🔄 Version History

- **v1.0.0** - Initial release with basic admin functionality
- **v1.1.0** - Added order management
- **v1.2.0** - Enhanced UI and responsive design

---

For more information or support, please open an issue in the GitHub repository.