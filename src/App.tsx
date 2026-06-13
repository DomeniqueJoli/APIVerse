import NavBar from "./Components/Layout/NavBar"
import logo from "./assets/galaxia.png"

function App(){
  return(
  <>
  <NavBar/>
    <section className="hero">
      <div className="hero-content">
          <h1>Explore um universo<br/>de APIs</h1>
          <p>
              Descubra novas APIs e evolua suas habilidades através de desafios, 
              conquistas e experiências interativas. Pratique com exemplos reais e 
              amplie seu conhecimento enquanto constrói projetos dinâmicos.
          </p>
          <div className="hero-buttons">
              <a href="App/Categorias/categorias.html" className="btn-primary">
                  Explorar APIs
              </a>
              <a href="App/info.html" className="btn-secondary">
                  Saiba Mais
              </a>
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