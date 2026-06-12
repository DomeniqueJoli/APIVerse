import logo from '../../assets/galaxia.png'

function NavBar() {
    
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src={logo} className="logo"/>
                <div className="nav-links">
                    <a href="index.html">Início</a>
                    <a href="App/Categorias/categorias.html">Explorar APIs</a>
                    <a href="App/info.html">Sobre</a>
                </div>
            </div>

            <div className="nav-right">
            <a href="App/Login/login.html" className="btn-secondary-nav">Entrar</a>
            <a href="App/Login/cadastro.html" className="btn-primary-nav">Cadastrar</a>
            </div>
        </nav>
    )
}

export default NavBar;