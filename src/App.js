import { useState } from "react";
import "./App.css";
import { Routes } from "./Components/Routes";
import { useFetch } from "./Components/useFetch/useFetch";

function App() {
  //Seleccion de dark theme
  const [theme, settheme] = useState(false);
  const handleToggle = () => {
    theme ? settheme(false) : settheme(true);
  };

  //url para peticiones
  const [endpoint, setEndpoint] = useState(
    "https://restcountries.eu/rest/v2/all"
  );

  //Peticiones al customHook
  const [data, Loading] = useFetch(endpoint);

  //URLs del input
  const fetch = (data) => {
    setEndpoint(data);
  };

  return (
    <div className="App">
      <div className={theme ? "dark" : "light"}>
        <header className="header">
          <h1>Where in the world?</h1>
          <span className="toggle" onClick={handleToggle}>
            {theme ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="far fa-moon"></i>
            )}
            Dark Mode
          </span>
        </header>
        <main>
          <Routes data={data} Loading={Loading} fetch={fetch} />
        </main>
      </div>
    </div>
  );
}

export default App;
