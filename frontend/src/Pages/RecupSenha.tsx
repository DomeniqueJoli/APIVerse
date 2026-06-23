import { useState } from "react";
import Footer from "../Components/Layout/Footer";

function RecupSenha(){
    const [erro, setErro] = useState("");

    function validar(e: React.FormEvent){
        e.preventDefault();
        setErro("");

        const form = e.target as HTMLFormElement;
        const senha = (form.elements.namedItem("senha") as HTMLInputElement).value;
        const confirmar = (form.elements.namedItem("confirmarSenha") as HTMLInputElement).value;

        if(senha !== confirmar){
            setErro("As senhas não coincidem.");
            return;
        }

        if(senha.length < 6){
            setErro("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // enviar...
    }

    return(
        <>
        <h1 className="title-form">Recupere Seu Acesso</h1>
        <p>Digite seu email e sua nova senha</p>

        <section className="log">
        <div className="cads-container">
            <form onSubmit={validar}>
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