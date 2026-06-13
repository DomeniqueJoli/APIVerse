import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import Categorias from './Pages/Categorias'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categorias" element={<Categorias/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)