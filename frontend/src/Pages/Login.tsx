import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Components/Layout/Footer";
import "../Styles/Login.css"
import { Navigate } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");
    
    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
    
        const response = await fetch("https://apiverse-ypsu.onrender.com/login",
        {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                email,
                senha
            })
        });
    
        const data = await response.json();
        if (response.ok) {
            setEmail("");
            setSenha("");
            localStorage.setItem("usuario", JSON.stringify(data.usuario));
            navigate("/Categorias");
        }else {
        setTipoMensagem("erro");
        setMensagem(data.erro || "Erro ao fazer login");
    }
    }

    return(
        <>
        <h1 className="title-form">Retome Sua Jornada</h1>

        <section className="log">
        <div className="cads-container">
        {mensagem && (<p className={`mensagem ${tipoMensagem}`}>{mensagem}</p>)}

            <form onSubmit={handleSubmit}>
            <div className="form-groups">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="input-form" type="email" id="email" name="email" placeholder="seu@email.com" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="senha">Senha</label>
                <input value={senha} onChange={e => setSenha(e.target.value)}
                className="input-form"
                type="password"
                id="senha"
                name="senha"
                placeholder="••••••••"
                required
                />
            </div>

            <button type="submit" className="btn-secondary-form">Entrar</button>
            </form>

            <p className="btn-primary-form">Esqueceu sua senha?<Link to={"/RecupSenha"}> Recuperar</Link></p>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Login;