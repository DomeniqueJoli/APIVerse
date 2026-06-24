import { useState } from "react";
import Footer from "../Components/Layout/Footer";

function RecupSenha(){
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function validar(e: React.FormEvent) {
        e.preventDefault();
        setErro("");

        const form = e.target as HTMLFormElement;

        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const senha = (form.elements.namedItem("senha") as HTMLInputElement).value;
        const confirmar = (form.elements.namedItem("confirmarSenha") as HTMLInputElement).value;

        if (senha !== confirmar) {
            setErro("As senhas não coincidem.");
            return;
        }

        const response = await fetch("http://localhost:3000/recuperar-senha", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        const data = await response.json();

        if (response.ok) {
            setMensagem("Senha atualizada com sucesso!");
            setErro("");
        } else {
            setErro(data.erro || "Erro ao atualizar senha");
        }
    }

    return(
        <>
        <h1 className="title-form">Recupere Seu Acesso</h1>

        <section className="log">
        <div className="cads-container">
            <form onSubmit={validar}>

                {mensagem && <p className="mensagem sucesso">{mensagem}</p>}

                <div className="form-groups">
                    <label htmlFor="email">Email</label>
                    <input className="input-form" type="email" id="email" name="email" placeholder="seu@email.com" required/>
                </div>

                <div className="form-groups">
                    <label htmlFor="senha">Nova senha</label>
                    <input className="input-form" type="password" id="senha" name="senha" placeholder="••••••••" required/>
                </div>

                <div className="form-groups">
                    <label htmlFor="confirmarSenha">Confirmar senha</label>
                    <input className="input-form" type="password" id="confirmarSenha" name="confirmarSenha" placeholder="••••••••" required/>
                </div>

                {erro && <span style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>{erro}</span>}

                <button type="submit" className="btn-secondary-form">Redefinir senha</button>
            </form>
        </div>
        </section>

        <Footer/>
        </>
    )
}

export default RecupSenha;