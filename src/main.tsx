import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
 
import './index.css'

const root = document.getElementById('root')!
const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, application)
} else {
  createRoot(root).render(application)
}
