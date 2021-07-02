import logo from "./img/logo.svg";
import { Header } from "./styles/App";
import { Main } from "./styles/App";
// import { Footer } from "./styles/App";
import { SearchBar } from "./components/SearchBar";
import { Characters } from "./components/Characters";
// import { Paginate } from "./components/Paginate";

function App({ candidateName = "Julio Cezar Ferreira" }) {
  return (
    <div className="App">
      <Header>
        <div className="App-logo">
          <img src={logo} alt="Objective logo" />
        </div>
        <div className="App-text">
          <h2>
            {candidateName} <strong>Teste de Front-end</strong>
          </h2>
          <span>CB</span>
        </div>
      </Header>
      <Main>
        <div className="container">
          <div className="App-searchBar">
            <h1>Busca de personagens</h1>
            <SearchBar heading="Nome do personagem" label="Search" />
          </div>
          <div className="App-charactersList">
            <Characters />
          </div>
        </div>
      </Main>
      {/* <Footer>
        <Paginate />
      </Footer> */}
    </div>
  );
}

export default App;
