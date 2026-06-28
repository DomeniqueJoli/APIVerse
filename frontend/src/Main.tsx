import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/style.css'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'
import Categorias from './Pages/Categorias'
import Perfil from './Pages/Perfil'
import CadsProjeto from './Pages/CadsProjeto'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecupSenha from './Pages/RecupSenha'
import AtualizarProjeto from './Pages/AtualizarProjeto'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Categorias" element={<Categorias/>} />
        <Route path="/RecupSenha" element={<RecupSenha/>} />
        <Route path="/Perfil" element={<Perfil/>} />        
        <Route path="/CadastroDeProjeto" element={<CadsProjeto/>} />        
        <Route path="/AtualizarProjeto/:id" element={<AtualizarProjeto/>} />        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)