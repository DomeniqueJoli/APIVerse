import { Link } from "react-router-dom";
import "./Cadastro.css"

function Cadastro(){
    return(
        <>
        <h1>Cadastro</h1>
        <Link to={"/Login"} className="btn-primary-cads">Entrar</Link>
        <Link to={"/Login"} className="btn-secondary-cads">Cadastrar</Link>
            <div className="btns-container">
            </div>
        </>
    )
}
export default Cadastro;