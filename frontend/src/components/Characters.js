import { useEffect, useState } from "react";
import api from "../api/Api";

export const Characters = () => {
  const [list, setList] = useState([]);

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

  const handleInfo = (name) => {
    console.log(name);
  };

  useEffect(() => {
    getData();
    console.log(list);
  }, []);

  return (
    <>
      <ul className="App-characters__list">
        {list.length === 0 ? (
          <p>loading..</p>
        ) : (
          list.map((item) => {
            return (
              <li key={item.id}>
                <button type="button" onClick={() => handleInfo(item.name)}>
                  <div className="character">
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Image of ${item.name}`}
                      loading="lazy"
                    />
                    <h3>{item.name}</h3>
                  </div>
                  <div className="series">
                    <ul>
                      {item.series.items.map((item) => {
                        return <li key={item.name}>{item.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="events">
                    <ul>
                      {item.events.items.map((item) => {
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
    </>
  );
};
