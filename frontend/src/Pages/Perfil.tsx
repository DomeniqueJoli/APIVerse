import NavBar from "../Components/Layout/NavBar";
import Footer from "../Components/Layout/Footer";
import "../Styles/Perfil.css"
import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

function Perfil(){

    const [usuario, setUsuario] = useState<any>(null);
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState("");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario") || "null");

    useEffect(() => {
        if (!usuarioLogado?.id) {
            navigate("/Login");
            return;
        }

        async function carregarPerfil() {
            const usuarioLogado = JSON.parse(localStorage.getItem("usuario") || "{}");
            const response = await fetch(`https://apiverse-ypsu.onrender.com/usuarios/${usuarioLogado.id}/perfil`);
            const data = await response.json();
            setUsuario(data);
        }
        carregarPerfil();
    }, []);

    if (!usuario) {
        return <p>Carregando...</p>;
    }

    async function deletarProjeto(id: number) {
        const response = await fetch(`https://apiverse-ypsu.onrender.com/projetos/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            window.location.reload();
        }
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

                <button className="btn-new-project" onClick={() => navigate("/CadastroDeProjeto")}> Criar Projeto </button>
                
                <h2 className="projects-title">Meus Projetos</h2>
                <div className="projects-grid">
                    {usuario.projetos?.length > 0 ? (usuario.projetos.map((projeto:any) => (
                        <div key={projeto.id} className="project-card">
                            <h3>{projeto.nomeProjeto}</h3>
                            <p>{projeto.descricao}</p>
                            <span className="project-status">{projeto.statusProjeto}</span>
                            <button className="btn-edit" onClick={() => navigate(`/AtualizarProjeto/${projeto.id}`)}>
                                Editar
                            </button>
                            <button className="btn-delete" onClick={() => deletarProjeto(projeto.id)}>
                                Excluir
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="no-projects">
                        Você ainda não criou nenhum Projeto.
                    </div>
                )}
                </div>

                <h2 className="projects-title">APIs Favoritas</h2>
                <div className="favorites-grid">
                {usuario.favoritas?.length > 0 ? (usuario.favoritas.map((api:any) => (
                <div className="favorite-card" key={api.id}>
                    <h3>{api.nomeApi}</h3>
                </div>
                ))
                ) : (
                <div className="no-projects">
                    Você ainda não favoritou nenhuma API.
                </div>
                )}

            </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Perfil;