import logo from "./logo.svg";
import "./App.css";
import Component01 from "./components/Component01";

function App() {
  return (
    <div className="Reactbasico">
      <h1>
        <p>Novo projeto chamado Reactbasico</p>
      </h1>
      <h2>ESCOPO E FOCO</h2>
      <p>
        A Revista Encontros Bibli publica trabalhos no campo da Ciência da
        Informação – Biblioteconomia – Documentação – Arquivologia - Museologia
        - Gestão da Informação - e áreas correlatas resultantes de pesquisas
        científicas, ensaios de caráter teórico e estudos de caso.
      </p>
      <h2>MISSÃO</h2>
      <p>
        Contribuir para a disseminação e promoção de novos conhecimentos em
        Ciência da Informação, Biblioteconomia, Arquivologia, Museologia e áreas
        correlatas.
      </p>
      <h2>PERIODICIDADE</h2>
      <p>
        Encontros Bibli é uma publicação que adotou a modalidade de publicação
        continuada ou fluxo contínuo a partir do volume 24, ano 2019.
      </p>
      <Component01 />
    </div>
  );
}

export default App;
