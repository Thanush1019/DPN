# MySite Template

A modern full-stack website template built with React, Vite, and Express.js. Perfect for building beautiful, responsive web applications.

## 🚀 Features

### Frontend (React + Vite + Tailwind)
- ⚡ **React 18** with modern hooks and functional components
- 🎯 **Vite** for lightning-fast development and building
- 🎨 **Tailwind CSS** for responsive design with dark mode support
- 🧭 **React Router DOM** for client-side routing
- 📱 **Fully responsive** design that works on all devices
- 🌙 **Dark mode toggle** with persistent preferences
- 🔧 **Modular components** (Header, Footer, Button)
- 📄 **Complete pages** (Home, About, Contact)
- 🌐 **Axios** configured for API communication

### Backend (Node.js + Express)
- 🛠️ **Express.js** server with RESTful API
- 🔒 **CORS enabled** for frontend communication
- 📡 **API endpoints** for testing and contact form
- 🏗️ **Modular structure** with routes and controllers
- 🚦 **Error handling** and validation
- 📊 **Health check** endpoint

### Development Tools
- 📦 **Single package.json** for all dependencies
- 🔄 **Concurrent development** (frontend + backend)
- 🧹 **ESLint** and **Prettier** for code quality
- 🎯 **Hot reload** for both frontend and backend
- 📝 **Comprehensive documentation**

## 📁 Project Structure

```
my-site-template/
├── public/                 # Static assets
├── src/                    # React frontend source
│   ├── assets/            # Images, icons, etc.
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.jsx     # Navigation with dark mode
│   │   │   ├── Footer.jsx     # Site footer
│   │   │   └── Button.jsx     # Reusable button component
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx       # Landing page
│   │   │   ├── About.jsx      # About page
│   │   │   └── Contact.jsx    # Contact form page
│   │   ├── styles/            # CSS files
│   │   │   └── index.css      # Tailwind + custom styles
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # React entry point
│   ├── server/                # Express.js backend
│   │   ├── index.js           # Server entry point
│   │   ├── routes/            # API routes
│   │   │   └── api.js         # API route definitions
│   │   └── controllers/       # Route handlers
│   │       └── apiController.js # API controller functions
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── postcss.config.js      # PostCSS configuration
│   ├── vite.config.js         # Vite configuration
│   ├── .eslintrc.cjs          # ESLint configuration
│   ├── .prettierrc            # Prettier configuration
│   ├── .gitignore             # Git ignore rules
│   ├── package.json           # Dependencies and scripts
│   └── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone or download** this template
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development servers**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health check: http://localhost:5000/health

### Available Scripts

```bash
# Development
npm run dev          # Start both frontend and backend
npm run client       # Start only React dev server
npm run server       # Start only Express server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## 🌐 API Endpoints

### Backend API (Port 5000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Returns a hello message |
| GET | `/api/status` | Server status and uptime |
| POST | `/api/contact` | Submit contact form |
| GET | `/health` | Health check endpoint |

### Example API Usage

```javascript
// Test backend connection
const response = await axios.get('/api/hello')
console.log(response.data.message) // "Hello from backend"

// Submit contact form
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Hello',
  message: 'This is a test message'
}
const response = await axios.post('/api/contact', formData)
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... add more colors
      },
    },
  },
},
```

### Components
- **Header**: Modify `src/components/Header.jsx` for navigation changes
- **Footer**: Update `src/components/Footer.jsx` for footer content
- **Button**: Customize `src/components/Button.jsx` for button styles

### Pages
- **Home**: Edit `src/pages/Home.jsx` for landing page content
- **About**: Modify `src/pages/About.jsx` for company information
- **Contact**: Update `src/pages/Contact.jsx` for contact details

### Backend
- **Routes**: Add new routes in `server/routes/api.js`
- **Controllers**: Create new handlers in `server/controllers/`
- **Middleware**: Add custom middleware in `server/index.js`

## 🚀 Deployment

### Frontend (Vercel, Netlify, etc.)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Heroku, Railway, etc.)
```bash
# Set environment variables
NODE_ENV=production
PORT=5000

# Deploy the entire project
```

## 📝 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have any questions or need help customizing this template, feel free to reach out!

---

**Happy coding! 🎉** 