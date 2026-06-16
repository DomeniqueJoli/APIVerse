import { Link } from "react-router-dom";
import logo from "./Assets/galaxia.png"

function App(){
  return(
  <>
    <section className="hero">
      <div className="hero-content">
          <h1>Explore um universo<br/>de APIs</h1>
          <p>
              Descubra novas APIs e evolua suas habilidades através de desafios, 
              conquistas e experiências interativas. Pratique com exemplos reais e 
              amplie seu conhecimento enquanto constrói projetos dinâmicos.
          </p>
          <div className="hero-buttons">
              <Link to={"/Cadastro"} className="btn-primary">Explorar APIs</Link>
              <Link to={"/Info"} className="btn-secondary">Saiba Mais</Link>
          </div>
      </div>

      <div className="hero-image">
          <img src={logo} className="hero-logo"/>
      </div>
    </section>
  </>
  )
}

export default App;