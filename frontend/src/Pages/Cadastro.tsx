import { Link } from "react-router-dom";
import "../Styles/Cadastro.css"
import Footer from "../Components/Layout/Footer";
import { useState } from "react";

function Cadastro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [perfilGit, setPerfilGit] = useState("")
    const [perfilLinkedin, setPerfilLinkedin] = useState("")
    const [linkPortfolio, setLinkPortfolio] = useState("")
    const [senha, setSenha] = useState("")
    const [recupSenha, setRecupSenha] = useState("")
    const [biografia, setBiografia] = useState("")

    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

    function limparFormulario() {
        setNome("");
        setEmail("");
        setDataNasc("");
        setPerfilGit("");
        setPerfilLinkedin("");
        setLinkPortfolio("");
        setSenha("");
        setRecupSenha("");
        setBiografia("");
    }

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();

        if (senha !== recupSenha) {
            setTipoMensagem("erro");
            setMensagem("As senhas não coincidem!");
            return;
        }

        if(senha === recupSenha){
            const response = await fetch("http://localhost:3000/usuarios",
            {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    nome,
                    email,
                    dataNasc,
                    perfilGit,
                    perfilLinkedin,
                    linkPortfolio,
                    senha,
                    biografia
                })
            });

            await response.json(); 
            if(response.ok){
                setTipoMensagem("sucesso");
                setMensagem("Cadastrado com sucesso!");
                limparFormulario()
            }
        }
    }

    return(
        <>
        <h1 className="title-form">Inicie Sua Jornada</h1>

        <section className="cads">
        <div className="cads-container">

        {mensagem && (<p className={`mensagem ${tipoMensagem}`}>{mensagem}</p>)}
        
            <form onSubmit={handleSubmit} >
            <div className="form-groups">
                <label htmlFor="username">Username</label>
                <input value={nome} onChange={e => setNome(e.target.value)} className="input-form" type="text" id="username" name="username" placeholder="Nome de usuário" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="input-form" type="email" id="email" name="email" placeholder="seu@email.com" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input value={dataNasc} onChange={e => setDataNasc(e.target.value)} className="input-form" type="date" id="dataNascimento" name="dataNascimento" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="perfilGit">Perfil do GitHub</label>
                <input value={perfilGit} onChange={e => setPerfilGit(e.target.value)} className="input-form" type="url" id="perfilGit" name="perfilGit" placeholder="github.com/..."/>
            </div>

            <div className="form-groups">
                <label htmlFor="perfilLinkedin">Perfil do Linkedin</label>
                <input value={perfilLinkedin} onChange={e => setPerfilLinkedin(e.target.value)} className="input-form" type="url" id="perfilLinkedin" name="perfilLinkedin" placeholder="linkedin.com/..."/>
            </div>

            <div className="form-groups">
                <label htmlFor="portfolio">Link do portfólio</label>
                <input value={linkPortfolio} onChange={e => setLinkPortfolio(e.target.value)} className="input-form" type="url" id="portfolio" name="portfolio" placeholder="https://seusite.com"/>
            </div>

            <div className="form-groups">
                <label htmlFor="senha">Senha</label>
                <input value={senha} onChange={e => setSenha(e.target.value)} className="input-form"
                type="password"
                id="senha"
                name="senha"
                placeholder="••••••••"
                required
                />
            </div>

            <div className="form-groups">
                <label htmlFor="confirmarSenha">Confirmar senha</label>
                <input value={recupSenha} onChange={e => setRecupSenha(e.target.value)} className="input-form"
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="••••••••"
                required
                />
            </div>
            
            <div className="form-groups">
                <label htmlFor="bio">Biografia</label>
                <textarea value={biografia} onChange={e => setBiografia(e.target.value)}  className="input-form" id="bio" name="bio" placeholder="Conte um pouco sobre você..." maxLength={150} rows={3}/>
            </div>

            <button type="submit" className="btn-secondary-form">Criar conta</button>
            </form>

            <p className="btn-primary-form">
                Já tem uma conta? <Link to={"/Login"}>Entrar</Link> 
            </p>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Cadastro;