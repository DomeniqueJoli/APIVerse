import NavBar from "../Components/Layout/NavBar";
import Footer from "../Components/Layout/Footer";
import "../Styles/Perfil.css"
import { useEffect, useState } from "react";

function Perfil(){

    const [usuario, setUsuario] = useState<any>(null);

    useEffect(() => {
        async function carregarPerfil() {
            const usuarioLogado = JSON.parse(localStorage.getItem("usuario") || "{}");
            const response = await fetch(`http://localhost:3000/usuarios/${usuarioLogado.id}/perfil`);
            const data = await response.json();
            setUsuario(data);
        }
        carregarPerfil();
    }, []);

    if (!usuario) {
        return <p>Carregando...</p>;
    }

    return(
        <>
        <NavBar/>
        <section className="section-container">
            <div className="profile-container">
                <div className="profile-info">
                    <div className="profile-header">
                        <div className="profile-avatar">{usuario.nome.charAt(0)}</div>
                        <div>
                            <h2 className="profile-name">{usuario.nome}</h2>
                            <p className="profile-email">{usuario.email}</p>
                        </div>
                    </div>

                    <p className="profile-bio">{usuario.biografia}</p>

                    <div className="profile-links">
                        <a href={usuario.perfilGit}>GitHub</a>
                        <a href={usuario.perfilLinkedin}>LinkedIn</a>
                        <a href={usuario.linkPortfolio}>Portfólio</a>
                    </div>
                </div>

                
                <div className="projects-grid">
                    {usuario.projetos.map((projeto:any) => (
                        <div key={projeto.id} className="project-card">
                            <h3>{projeto.nomeProjeto}</h3>
                            <p>{projeto.descricao}</p>
                            <span className="project-status">{projeto.statusProjeto}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Perfil;