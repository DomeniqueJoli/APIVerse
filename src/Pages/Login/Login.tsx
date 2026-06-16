import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import "../../Styles/Login.css"

function Login(){
    return(
        <>
        <h1 className="title-form">Retome Sua Jornada</h1>
        <p>Bem-vindo de volta ao APIVerse</p>

        <section className="log">
        <div className="cads-container">
            <form>
            <div className="form-groups">
                <label htmlFor="email">Email</label>
                <input className="input-form" type="email" id="email" name="email" placeholder="seu@email.com" required/>
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

            <button type="submit" className="btn-secondary-form">Entrar</button>
            </form>

            <p className="btn-primary-form">Esqueceu sua senha?<Link to={"/RecupSenha"}> Recuperar</Link>
</p>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Login;