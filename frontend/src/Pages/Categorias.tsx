import NavBar from "../Components/Layout/NavBar";
import SearchBar from "../Components/UI/SearchBar";
import Footer from "../Components/Layout/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApis } from "../Apis/GuruService";
import ApiCard from "../Features/ApiCard";
import "../Styles/Categorias.css";
import {Code, Popcorn, FilmSlate, Toolbox, GraduationCap, GameController, Robot, CurrencyDollar, CloudSun} from "@phosphor-icons/react";

const categorias = [
    { label: "Desenvolvimento", icon: <Code size={24} />, path: "" },
    { label: "Entretenimento", icon: <Popcorn size={24} />, path: "" },
    { label: "Filmes e Séries", icon: <FilmSlate size={24} />, path: "" },
    { label: "Utilidades", icon: <Toolbox size={24} />, path: "" },
    { label: "Educação e Conhecimento", icon: <GraduationCap size={24} />, path: "" },
    { label: "Games", icon: <GameController size={24} />, path: "" },
    { label: "Inteligência Artificial", icon: <Robot size={24} />, path: "" },
    { label: "Finanças", icon: <CurrencyDollar size={24} />, path: "" },
    { label: "Clima e Meio Ambiente", icon: <CloudSun size={24} />, path: "" },
];

function Categorias() {
    const navigate = useNavigate();
    const [busca, setBusca] = useState("");
    const [aberto, setAberto] = useState<number | null>(null);

    const [apisPorCategoria, setApisPorCategoria] = useState<Record<string, [string, any][]>>({});

    function toggle(i: number) {
        setAberto(aberto === i ? null : i);
    }

    function agruparApis(data: Record<string, any>) {
        const agrupadas: Record<string, [string, any][]> = {};

        categorias.forEach(cat => {
            agrupadas[cat.label] = [];
        });

        Object.entries(data).forEach(([nome, api]: [string, any]) => {
            const versao = api.versions?.[api.preferred];

            const categoriasGuru = Array.isArray(
                versao?.info?.["x-apisguru-categories"]
            )
                ? versao.info["x-apisguru-categories"]
                : [];

            // Desenvolvimento
            if (
                categoriasGuru.some((c: string) =>
                    ["developer_tools", "backend", "hosting", "tools"].includes(c)
                )
            ) {
                agrupadas["Desenvolvimento"].push([nome, api]);
            }

            // Entretenimento
            if (
                categoriasGuru.some((c: string) =>
                    ["entertainment", "social", "media"].includes(c)
                )
            ) {
                agrupadas["Entretenimento"].push([nome, api]);
            }

            // Filmes e Séries
            if (
                categoriasGuru.some((c: string) =>
                    ["media", "entertainment"].includes(c)
                )
            ) {
                agrupadas["Filmes e Séries"].push([nome, api]);
            }

            // Utilidades
            if (
                categoriasGuru.some((c: string) =>
                    ["tools", "search", "forms", "email"].includes(c)
                )
            ) {
                agrupadas["Utilidades"].push([nome, api]);
            }

            // Educação
            if (
                categoriasGuru.some((c: string) =>
                    ["education", "open_data", "text"].includes(c)
                )
            ) {
                agrupadas["Educação e Conhecimento"].push([nome, api]);
            }

            // Games
            if (
                categoriasGuru.some((c: string) =>
                    ["gaming", "games", "entertainment"].includes(c)
                )
            ) {
                agrupadas["Games"].push([nome, api]);
            }

            // Inteligência Artificial
            if (
                categoriasGuru.some((c: string) =>
                    ["machine_learning", "analytics"].includes(c)
                )
            ) {
                agrupadas["Inteligência Artificial"].push([nome, api]);
            }

            // Finanças
            if (
                categoriasGuru.some((c: string) =>
                    ["financial", "payment", "ecommerce"].includes(c)
                )
            ) {
                agrupadas["Finanças"].push([nome, api]);
            }

            // Clima e Meio Ambiente
            if (
                categoriasGuru.some((c: string) =>
                    ["location", "open_data"].includes(c)
                )
            ) {
                agrupadas["Clima e Meio Ambiente"].push([nome, api]);
            }
        });

        // Limita a 20 APIs por categoria
        Object.keys(agrupadas).forEach(categoria => {
            agrupadas[categoria] = agrupadas[categoria].slice(0, 20);
        });

        return agrupadas;
    }

    useEffect(() => {
        getApis()
            .then(data => {
                const agrupadas = agruparApis(data);
                setApisPorCategoria(agrupadas);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <NavBar />
            <SearchBar
                valor={busca}
                onChange={setBusca}
            />
            <section className="features">
                <ul className="category-list">
                    {categorias.map((cat, i) => {
                    const apisCategoria =
                        (apisPorCategoria[cat.label] || []).filter(
                            ([nome, api]) => {
                                const versao =
                                    api.versions?.[api.preferred];

                                const titulo =
                                    versao?.info?.title || nome;

                                return (
                                    nome
                                        .toLowerCase()
                                        .includes(busca.toLowerCase()) ||
                                    titulo
                                        .toLowerCase()
                                        .includes(busca.toLowerCase())
                                );
                            }
                        );
                        return (
                            <li
                                key={i}
                                className={`category-item ${
                                    aberto === i ? "aberto" : ""
                                }`}
                            >
                                <div
                                    className="category-item-header"
                                    onClick={() => toggle(i)}
                                >
                                    <span className="category-item-icon">
                                        {cat.icon}
                                    </span>

                                    <span className="category-item-label">
                                        {cat.label}
                                    </span>

                                    <span className="category-item-arrow">
                                        {aberto === i ? "▲" : "▼"}
                                    </span>
                                </div>

                                {aberto === i && (
                                    <div className="category-item-body">
                                    <div className="api-list">
                                        {apisCategoria.map(([nome, api]) => (
                                            <ApiCard
                                                key={nome}
                                                nome={nome}
                                                api={api}
                                            />
                                        ))}
                                    </div>

                                        {cat.path && (
                                            <button
                                                className="btn-secondary-form"
                                                onClick={() =>
                                                    navigate(cat.path)
                                                }
                                            >
                                                Ver APIs
                                            </button>
                                        )}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </section>

            <Footer />
        </>
    );
}

export default Categorias;