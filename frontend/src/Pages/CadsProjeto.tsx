import "../Styles/Cadastro.css";
import Footer from "../Components/Layout/Footer";

function CadsProjeto() {
    return (
        <>
            <h1 className="title-form">Cadastrar Projeto</h1>
            <p>
                Compartilhe um projeto desenvolvido utilizando APIs e inspire outros desenvolvedores.
            </p>

            <section className="cads">
                <div className="cads-container">
                    <form>
                        <div className="form-groups">
                            <label htmlFor="nomeProjeto">
                                Nome do Projeto
                            </label>
                            <input
                                className="input-form"
                                type="text"
                                id="nomeProjeto"
                                placeholder="Ex: WeatherVision"
                                required
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="apiUtilizada">
                                API Utilizada
                            </label>
                            <input
                                className="input-form"
                                type="text"
                                id="apiUtilizada"
                                placeholder="Ex: OpenWeather API"
                                required
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="descricao">
                                Descrição do Projeto
                            </label>
                            <textarea
                                className="input-form"
                                id="descricao"
                                rows={4}
                                placeholder="Explique brevemente o que seu projeto faz..."
                                required
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="objetivo">
                                Objetivo
                            </label>
                            <textarea
                                className="input-form"
                                id="objetivo"
                                rows={3}
                                placeholder="Qual problema seu projeto resolve?"
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="tecnologias">
                                Tecnologias Utilizadas
                            </label>
                            <input
                                className="input-form"
                                type="text"
                                id="tecnologias"
                                placeholder="React, Node.js, PostgreSQL..."
                                required
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="repositorio">
                                Repositório GitHub
                            </label>
                            <input
                                className="input-form"
                                type="url"
                                id="repositorio"
                                placeholder="https://github.com/usuario/projeto"
                                required
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="demo">
                                Link de Demonstração
                            </label>
                            <input
                                className="input-form"
                                type="url"
                                id="demo"
                                placeholder="https://meuprojeto.com"
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="status">
                                Status do Projeto
                            </label>

                            <select
                                className="input-form"
                                id="status"
                                required
                            >
                                <option value="">
                                    Selecione
                                </option>

                                <option>
                                    Em Desenvolvimento
                                </option>

                                <option>
                                    MVP
                                </option>

                                <option>
                                    Concluído
                                </option>

                                <option>
                                    Descontinuado
                                </option>
                            </select>
                        </div>

                        <div className="form-groups">
                            <label htmlFor="equipe">
                                Equipe (Opcional)
                            </label>

                            <input
                                className="input-form"
                                type="text"
                                id="equipe"
                                placeholder="Ex: João, Maria, Ana"
                            />
                        </div>

                        <div className="form-groups">
                            <label htmlFor="capa">
                                Imagem de Capa
                            </label>

                            <input
                                className="input-form"
                                type="file"
                                id="capa"
                                accept="image/*"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-secondary-form"
                        >
                            Publicar Projeto
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CadsProjeto;