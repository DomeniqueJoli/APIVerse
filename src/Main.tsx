import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import Info from './Pages/Info'
import Cadastro from './Pages/Login/Cadastro'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<Info/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)