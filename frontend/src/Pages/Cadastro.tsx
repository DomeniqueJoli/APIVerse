import { Link } from "react-router-dom";
import "../Styles/Cadastro.css"
import Footer from "../Components/Layout/Footer";

function Cadastro(){
    return(
        <>
        <h1 className="title-form">Inicie Sua Jornada</h1>
        <section className="cads">
        <div className="cads-container">
            <form>
            <div className="form-groups">
                <label htmlFor="username">Username</label>
                <input className="input-form" type="text" id="username" name="username" placeholder="Nome de usuário" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="email">Email</label>
                <input className="input-form" type="email" id="email" name="email" placeholder="seu@email.com" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input className="input-form" type="date" id="dataNascimento" name="dataNascimento" required/>
            </div>

            <div className="form-groups">
                <label htmlFor="perfilGit">Perfil do GitHub</label>
                <input className="input-form" type="text" id="perfilGit" name="perfilGit" placeholder="github.com/..."/>
            </div>

            <div className="form-groups">
                <label htmlFor="perfilLinkedin">Perfil do Linkedin</label>
                <input className="input-form" type="text" id="perfilLinkedin" name="perfilLinkedin" placeholder="linkedin.com/..."/>
            </div>

            <div className="form-groups">
                <label htmlFor="portfolio">Link do portfólio</label>
                <input className="input-form" type="url" id="portfolio" name="portfolio" placeholder="https://seusite.com"/>
            </div>

            <div className="form-groups">
                <label htmlFor="senha">Senha</label>
                <input className="input-form"
                type="password"
                id="senha"
                name="senha"
                placeholder="••••••••"
                required
                />
            </div>

            <div className="form-groups">
                <label htmlFor="confirmarSenha">Confirmar senha</label>
                <input className="input-form"
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="••••••••"
                required
                />
            </div>
            
            <div className="form-groups">
                <label htmlFor="bio">Biografia</label>
                <textarea className="input-form" id="bio" name="bio" placeholder="Conte um pouco sobre você..." maxLength={150} rows={3}/>
            </div>

            <button type="submit" className="btn-secondary-form">Criar conta</button>
            </form>

            <p className="btn-primary-form">
                Já tem uma conta? <Link to={"/login"}>Entrar</Link> 
            </p>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Cadastro;