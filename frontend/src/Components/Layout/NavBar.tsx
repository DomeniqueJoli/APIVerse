import logo from '../../Assets/galaxia.png'
import { Link } from "react-router-dom";

function NavBar() {
    
    return(
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/"><img src={logo} alt="Logo" className='logo'/></Link>
                <div className="nav-links">
                    <Link to="/">Início</Link>
                    <Link to="/Categorias">Explorar APIs</Link>
                    <Link to="/Perfil">Perfil</Link>
                </div>
            </div>  
        </nav>
    )
}

export default NavBar;