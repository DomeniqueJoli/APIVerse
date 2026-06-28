import "../Styles/Cadastro.css";
import Footer from "../Components/Layout/Footer";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CadsProjeto() {

    const statusOptions = [
    { value: "EM_DESENVOLVIMENTO", label: "Em Desenvolvimento" },
    { value: "MVP", label: "MVP" },
    { value: "CONCLUIDO", label: "Concluído" },
    { value: "DESCONTINUADO", label: "Descontinuado" }
    ]; 
   
    const [nomeProjeto, setNomeProjeto] = useState("");
    const [apiUtilizada, setApiUtilizada] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tecnologiaFront, setTecnologiaFront] = useState("")
    const [tecnologiaBack, setTecnologiaBack] = useState("")
    const [repoGitHub, setRepoGitHub] = useState("")
    const [linkDemo, setLinkDemo] = useState("")
    const [statusProjeto, setStatusProjeto] = useState("")
    const [equipe, setEquipe] = useState("")
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");
    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
    
    function limparFormulario() {
        setNomeProjeto("");
        setApiUtilizada("");
        setDescricao("");
        setTecnologiaFront("");
        setTecnologiaBack("");
        setRepoGitHub("");
        setLinkDemo("");
        setStatusProjeto("");
        setEquipe("");
    }

        async function handleSubmit(e:React.FormEvent) {
            e.preventDefault();

            if (!usuario?.id) {
                setTipoMensagem("erro");
                setMensagem("Usuário não logado. Faça login antes de cadastrar um projeto.");
                return;
            }
    
            const response = await fetch("https://apiverse-ypsu.onrender.com/projetos",
            {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    nomeProjeto,
                    apiUtilizada,
                    descricao,
                    tecnologiaFront,
                    tecnologiaBack,
                    repoGitHub,
                    linkDemo,
                    statusProjeto,
                    equipe,
                    usuarioId: usuario.id
                })
            });
    
            const data = await response.json();

            if(response.ok){
                setTipoMensagem("sucesso");
                setMensagem("Projeto cadastrado com sucesso!");
                limparFormulario()
                navigate("/Perfil");
            } else {
                setTipoMensagem("erro");
                setMensagem(data.erro || "Erro ao cadastrar projeto");
            }
        }
    return (
        <>
        <h1 className="title-form">Cadastrar Projeto</h1>
        <section className="cads">
            <div className="cads-container">
            {mensagem && (<p className={`mensagem ${tipoMensagem}`}>{mensagem}</p>)}
            
                <form onSubmit={handleSubmit}>
                    <div className="form-groups">
                        <label htmlFor="nomeProjeto">Nome do Projeto</label>
                        <input onChange={(e) => setNomeProjeto(e.target.value)} value={nomeProjeto} className="input-form" type="text" id="nomeProjeto" placeholder="Ex: WeatherVision" required/>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="apiUtilizada">API Utilizada</label>
                        <input onChange={(e) => setApiUtilizada(e.target.value)} value={apiUtilizada} className="input-form" type="text" id="apiUtilizada" placeholder="Ex: OpenWeather API" required/>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="tecnologiaFront">Tecnologia Utilizada no Front</label>
                        <input onChange={(e) => setTecnologiaFront(e.target.value)} value={tecnologiaFront} className="input-form" type="text" id="tecnologiaFront" placeholder="React..." required/>
                    </div>
                    
                    <div className="form-groups">
                        <label htmlFor="tecnologiaBack">Tecnologia Utilizada no Back</label>
                        <input onChange={(e) => setTecnologiaBack(e.target.value)} value={tecnologiaBack} className="input-form" type="text" id="tecnologiaBack" placeholder="Postgre..." required/>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="repoGitHub">Repositório GitHub</label>
                        <input onChange={(e) => setRepoGitHub(e.target.value)} value={repoGitHub} className="input-form" type="url" id="repoGitHub" placeholder="https://github.com/usuario/projeto" required/>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="linkDemo">Link de Demonstração</label>
                        <input onChange={(e) => setLinkDemo(e.target.value)} value={linkDemo} className="input-form" type="url" id="linkDemo" placeholder="https://meuprojeto.com" />
                    </div>

                    <div className="form-groups">
                        <label htmlFor="statusProjeto">Status do Projeto</label>
                        <select 
                        value={statusProjeto}
                        onChange={(e) => setStatusProjeto(e.target.value)} 
                        className="input-form" 
                        id="statusProjeto" 
                        required>
                            <option value="">Selecione</option>
                            {statusOptions.map((status) => (<option key={status.value} value={status.value}>{status.label}</option>))}
                        </select>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="equipe">Equipe</label>
                        <input onChange={(e) => setEquipe(e.target.value)} value={equipe} className="input-form" type="text" id="equipe" placeholder="Ex: João, Maria, Ana"/>
                    </div>

                    <div className="form-groups">
                        <label htmlFor="descricao">Descrição do Projeto</label>
                        <textarea onChange={(e) => setDescricao(e.target.value)} value={descricao} className="input-form" id="descricao" rows={4} placeholder="Explique brevemente o que seu projeto faz..." required/>
                    </div>

                    <button type="submit" className="btn-secondary-form">Publicar Projeto</button>
                </form>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default CadsProjeto;