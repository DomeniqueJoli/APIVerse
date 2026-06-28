import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Cadastro.css";
import Footer from "../Components/Layout/Footer";

function AtualizarProjeto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const statusOptions = [
    { value: "EM_DESENVOLVIMENTO", label: "Em Desenvolvimento" },
    { value: "MVP", label: "MVP" },
    { value: "CONCLUIDO", label: "Concluído" },
    { value: "DESCONTINUADO", label: "Descontinuado" }
  ];

  const [nomeProjeto, setNomeProjeto] = useState("");
  const [apiUtilizada, setApiUtilizada] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tecnologiaFront, setTecnologiaFront] = useState("");
  const [tecnologiaBack, setTecnologiaBack] = useState("");
  const [repoGitHub, setRepoGitHub] = useState("");
  const [linkDemo, setLinkDemo] = useState("");
  const [statusProjeto, setStatusProjeto] = useState("");
  const [equipe, setEquipe] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  useEffect(() => {
    async function carregarProjeto() {
      try {
        const response = await fetch(`https://apiverse-ypsu.onrender.com/projetos/${id}`);
        const data = await response.json();

        setNomeProjeto(data.nomeProjeto);
        setApiUtilizada(data.apiUtilizada);
        setDescricao(data.descricao);
        setTecnologiaFront(data.tecnologiaFront);
        setTecnologiaBack(data.tecnologiaBack);
        setRepoGitHub(data.repoGitHub);
        setLinkDemo(data.linkDemo || "");
        setStatusProjeto(data.statusProjeto);
        setEquipe(data.equipe);

      } catch (error) {
        setTipoMensagem("erro");
        setMensagem("Erro ao carregar projeto");
      }
    }

    carregarProjeto();
  }, [id]);

  async function atualizarProjeto(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`https://apiverse-ypsu.onrender.com/projetos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nomeProjeto,
        apiUtilizada,
        descricao,
        tecnologiaFront,
        tecnologiaBack,
        repoGitHub,
        linkDemo,
        statusProjeto,
        equipe
      })
    });

    const data = await response.json();

    if (response.ok) {
      setTipoMensagem("sucesso");
      setMensagem("Projeto atualizado com sucesso!");

      setTimeout(() => {
        navigate("/Perfil");
      }, 1200);

    } else {
      setTipoMensagem("erro");
      setMensagem(data.erro || "Erro ao atualizar projeto");
    }
  }

  return (
    <>
      <h1 className="title-form">Editar Projeto</h1>
      <section className="cads">
        <div className="cads-container">

          {mensagem && (<p className={`mensagem ${tipoMensagem}`}>{mensagem}</p>)}

          <form onSubmit={atualizarProjeto}>
            <div className="form-groups">
              <label>Nome do Projeto</label>
              <input value={nomeProjeto} onChange={(e) => setNomeProjeto(e.target.value)} className="input-form" type="text" required />
            </div>

            <div className="form-groups">
              <label>API Utilizada</label>
              <input value={apiUtilizada} onChange={(e) => setApiUtilizada(e.target.value)} className="input-form" type="text" required />
            </div>

            <div className="form-groups">
              <label>Tecnologia Front</label>
              <input value={tecnologiaFront} onChange={(e) => setTecnologiaFront(e.target.value)} className="input-form" type="text" required />
            </div>

            <div className="form-groups">
              <label>Tecnologia Back</label>
              <input value={tecnologiaBack} onChange={(e) => setTecnologiaBack(e.target.value)} className="input-form" type="text" required />
            </div>

            <div className="form-groups">
              <label>GitHub</label>
              <input value={repoGitHub} onChange={(e) => setRepoGitHub(e.target.value)} className="input-form" type="url" required />
            </div>

            <div className="form-groups">
              <label>Demo</label>
              <input value={linkDemo} onChange={(e) => setLinkDemo(e.target.value)} className="input-form" type="url" />
            </div>

            <div className="form-groups">
              <label>Status</label>
              <select value={statusProjeto} onChange={(e) => setStatusProjeto(e.target.value)} className="input-form" required>
                <option value="">Selecione</option>
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>

            <div className="form-groups">
              <label>Equipe</label>
              <input value={equipe} onChange={(e) => setEquipe(e.target.value)} className="input-form" type="text"/>
            </div>

            <div className="form-groups">
              <label>Descrição</label>
              <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="input-form" rows={4} required />
            </div>

            <button type="submit" className="btn-secondary-form">Atualizar Projeto</button>

          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AtualizarProjeto;