// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
// ✅ IMPORTANT: Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// ✅ Import Bootstrap JS (for dropdowns, modals, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)