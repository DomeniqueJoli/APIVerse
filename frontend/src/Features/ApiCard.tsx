import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ApiCard.css";

interface ApiCardProps {
    nome: string;
    api: any;
}

function ApiCard({ nome, api }: ApiCardProps) {
    const navigate = useNavigate();
    const [expandido, setExpandido] = useState(false);
    const versao = api.versions?.[api.preferred];
    const titulo = versao?.info?.title || nome;
    const descricao = versao?.info?.description || "Sem descrição disponível.";
    const descricaoFinal = descricao.length > 300 ? descricao.substring(0, 700) + "..." : descricao;
    const versaoApi = versao?.info?.version || "N/A";
    const categorias = versao?.info?.["x-apisguru-categories"] || [];

    return (
        <div className="api-card">
            <div className="api-header">
                <h3>{titulo}</h3>
                <button className="api-btn" onClick={() => setExpandido(!expandido)}>{expandido ? "Ver menos" : "Ver mais"}</button>
            </div>

            {!expandido && (<span className="api-version"> Versão {versaoApi}</span>)}
            
            {expandido && (
                <div className="api-content">
                    <div className="api-info">
                        <strong>Versão</strong>
                        <p>{versaoApi}</p>
                    </div>

                    {categorias.length > 0 && (
                        <div className="api-info">
                            <strong>Categorias</strong>
                            <div className="tags">{categorias.map((cat: string) => (
                                <span key={cat} className="tag">{cat.replace("_", " ")}</span>))}
                            </div>
                        </div>
                    )}

                    <div className="api-info">
                        <strong>Descrição</strong>
                        <p>{descricaoFinal}</p>
                    </div>

                    <div className="api-actions">
                        {versao?.link && (<a href={versao.link} target="_blank" rel="noreferrer" className="api-doc"> Documentação </a>)}
                        <button className="api-use" onClick={() => navigate("/CadastroDeProjeto",{state: {apiNome:titulo,},})}> Utilizar API </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ApiCard;