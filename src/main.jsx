import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="md:container md:m-auto max-height">
        <App />
        <footer className="footer">
          <p>Made by Aldhair Vera</p>
        </footer>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
