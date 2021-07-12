import React from "react";
import { useHistory } from "react-router-dom";

import "./Countries.css";

export const CardCountries = ({
  name,
  population,
  region,
  capital,
  flag,
  handleAdvance,
}) => {
  const history = useHistory();

  const handledSelect = (e) => {
    handleAdvance(e.target.alt);
    history.push(`/advanced/${name}`);
  };

  return (
    <section className="card">
      <div className="card-flags" onClick={handledSelect}>
        <img src={flag} alt={name} height="100%" width="100%" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          region:<span> {region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </section>
  );
};
