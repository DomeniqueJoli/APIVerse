import NavBar from "../Components/Layout/NavBar";
import SearchBar from "../Components/UI/SearchBar";
import Footer from "../Components/Layout/Footer";
import { Link, useNavigate } from "react-router-dom";
// import PageEntretenimento from "../Features/Categorias/Entretenimento/PageEntretenimento";

function Categorias(){
    const navigate = useNavigate();
    
    return(
        <>
        <NavBar/>
        <SearchBar/>
        <section className="features">
        <div className="cards">
            <div className="card">
                <h3>Desenvolvimento</h3>
            </div>

            <div className="card" onClick={() => navigate("/Categorias/Entretenimento")}>
                <h3>Entretenimento</h3>
            </div>

            <div className="card">
                <h3>Filmes e Séries</h3>
            </div>

            <div className="card">
                <h3>Utilidades</h3>
            </div>
            
            <div className="card">
                <h3>Educação e Conhecimento</h3>
            </div>

            <div className="card">
                <h3>Games</h3>
            </div>

            <div className="card">
                <h3>Inteligência Artificial</h3>
            </div>
            
            <div className="card">
                <h3>Finanças</h3>
            </div>

            <div className="card">
                <h3>Clima e Meio ambiente</h3>
            </div>
        </div>
        </section>
            
        <section className="categories">
        <h2>Categorias Populares</h2>
        <div className="category-grid">
            <div className="category">Inteligência Artificial</div>
            <div className="category">Utilidades</div>
            <div className="category">Entretenimento</div>
            <div className="category">Finanças</div>
            <div className="category">Desenvolvimento</div>
            <div className="category">Governamental</div>
        </div>
        </section>

        <section className="achievements">
        <h2>Conquistas</h2>
        <div className="badges">
            <div className="badge-card">Primeiro Contato</div>
            <div className="badge-card">Explorador de IA</div>
            <div className="badge-card">Mestre do Clima</div>
            <div className="badge-card">Certificado APIverse</div>
        </div>
        </section>

        <Footer/>
        </>
    )
}

export default Categorias;