import { useState, useEffect } from "react";

import logo from "./img/logo.svg";
import { Header } from "./styles/App";
import { Main } from "./styles/App";
import api from "./services/Api";
import { useModal } from "./hooks/Modal";
import { CharacterDetails } from "./components/Modal/CharacterDetails";

function App({
  candidateName = "Julio Cezar Ferreira",
  testName = "Teste de Front-end",
  heading = "Busca de personagens",
  subHeading = "Nome do personagem",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  const { open, close } = useModal();

  const getData = async () => {
    try {
      const data = await api
        .get()
        .then((response) => response.data.data.results);
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInfo = (item) => {
    document.body.classList.add("is-hidden");
    open({
      content: (
        <CharacterDetails
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          title={item.name}
          description={item.description}
          series={item.series}
          comics={item.comics}
          events={item.events}
          urls={item.urls}
        />
      ),
    });
  };

  useEffect(() => {
    getData();

    const closeModal = (e) => {
      if (e.keyCode === 27) {
        document.body.classList.remove("is-hidden");
        close();
      }
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  return (
    <div className="App">
      <Header>
        <div className="App-logo">
          <img src={logo} alt="Objective logo" />
        </div>
        <div className="App-text">
          <div className="App-text__name">
            <h2>{candidateName}</h2>
            <strong>{testName}</strong>
          </div>
          <div className="App-text__logo">CB</div>
        </div>
      </Header>
      <Main>
        <div className="container">
          <div className="App-searchBar">
            <h1>{heading}</h1>
            <label htmlFor="search">
              <span>{subHeading}</span>
              <input
                type="search"
                placeholder="Search"
                spellCheck="false"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
          <div className="App-charactersList">
            <ul className="App-characters__list">
              {list.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                list
                  .filter((value) => {
                    if (
                      value.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                    return null;
                  })
                  .map((item) => {
                    return (
                      <li key={item.id}>
                        <button type="button" onClick={() => handleInfo(item)}>
                          <div className="character">
                            <img
                              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                              alt={item.name}
                              loading="lazy"
                            />
                            <h3>{item.name}</h3>
                          </div>
                          <div className="series">
                            <ul>
                              {item.series.items.slice(0, 3).map((item) => {
                                return <li key={item.name}>{item.name}</li>;
                              })}
                            </ul>
                          </div>
                          <div className="events">
                            <ul>
                              {item.events.items.slice(0, 3).map((item) => {
                                return <li key={item.name}>{item.name}</li>;
                              })}
                            </ul>
                          </div>
                        </button>
                      </li>
                    );
                  })
              )}
            </ul>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;
