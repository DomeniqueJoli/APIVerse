import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import Info from './Pages/Info'
import Cadastro from './Pages/Login/Cadastro'
import Login from './Pages/Login/Login'
import Categorias from './Pages/Categorias'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecupSenha from './Pages/Login/RecupSenha'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Info" element={<Info/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Categorias" element={<Categorias/>} />
        <Route path="/RecupSenha" element={<RecupSenha/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)