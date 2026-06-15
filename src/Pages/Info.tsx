import '../Styles/Info.css'
import Footer from '../Components/Layout/Footer';
import { Link } from "react-router-dom";

function Info(){
    return(
        <>
        <section>
              <h1 className="overview-title">Mais que um catálogo de APIs</h1>
              <p className="overview-subtitle">
                Descubra, explore e integre APIs de diversas categorias em um único lugar.
              </p>
        </section>

        <section className="feature-section">
        <div className="feature-text">
          <span className="feature-tag">Exploração</span>
          <p>
            O APIVerse reúne APIs de diversas categorias, como clima,
            entretenimento, jogos, finanças, geolocalização e muito mais.
          </p>
          <p>
            Encontre rapidamente a API ideal para o seu próximo projeto e
            descubra novas tecnologias para explorar.
          </p>
        </div>
        <div className="feature-card">
          <h3>Categorias disponíveis</h3>
            <div className="tags">
              <span><i className="ph ph-cloud-sun"></i> Clima</span>
              <span><i className="ph ph-game-controller"></i> Games</span>
              <span><i className="ph ph-film-slate"></i> Filmes</span>
              <span><i className="ph ph-currency-dollar"></i> Finanças</span>
              <span><i className="ph ph-globe"></i> Geografia</span>
              <span><i className="ph ph-atom"></i> Ciência</span>
            </div>
        </div>
      </section>

      <section className="feature-section reverse">
        <div className="feature-card">
          <h3>Teste APIs</h3>
          <p>
            Faça requisições diretamente pela plataforma e visualize respostas
            em tempo real.
          </p>
        </div>

        <div className="feature-text">
          <span className="feature-tag">Integração</span>
          <p>
            Antes de criar seu projeto, você pode testar e entender
            como a API funciona na prática.
          </p>

          <p>
            Isso reduz o tempo gasto procurando exemplos e acelera o processo
            de desenvolvimento.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-text">
          <span className="feature-tag">Projetos</span>
          <p>
            O APIVerse incentiva o aprendizado através da prática.
          </p>

          <p>
            Utilize APIs em aplicações reais, experimente novas ideias e
            fortaleça seu portfólio com projetos próprios.
          </p>
        </div>

        <div className="feature-card">
          <h3>O que você pode criar?</h3>

          <ul>
            <li>Aplicações web</li>
            <li>Dashboards</li>
            <li>Jogos</li>
            <li>Apps mobile</li>
            <li>Ferramentas de produtividade</li>
          </ul>
        </div>
      </section>

      <section className="achievements">
        <div className="achievements-header">
          <h2>Sua evolução é reconhecida  <i className='ph ph-trophy'/></h2>
          <p className='overview-subtitle'>
            Compartilhe seus projetos desenvolvidos com APIs e avance por
            desafios que demonstram sua evolução como desenvolvedor.
          </p>
        </div>

        <div className="badges">
          <div className="badge-card">
            <h3><i className='ph ph-medal'/> Explorador</h3>
            <p>Primeiro projeto compartilhado</p>
          </div>

          <div className="badge-card">
            <h3><i className='ph ph-medal'/> Integrador</h3>
            <p>5 projetos publicados</p>
          </div>

          <div className="badge-card">
            <h3><i className='ph ph-medal'/> Mestre das APIs</h3>
            <p>15 projetos publicados</p>
          </div>
        </div>
      </section>

      <section className="final-section">
        <h2>Cada API é uma nova oportunidade de criar.</h2>
        <Link to={"/Cadastro"} className="btn-primary">Explorar APIs</Link>
      </section>

      <Footer/>
    </>
  );
}
export default Info;