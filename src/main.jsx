import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'

import { ThemeProvider } from "@material-tailwind/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ThemeProvider />
  </React.StrictMode>
)
