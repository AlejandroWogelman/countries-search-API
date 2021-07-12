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
        <h5>
          Population: <span>{population}</span>
        </h5>
        <h5>
          region:<span> {region}</span>
        </h5>
        <h5>
          Capital: <span>{capital}</span>
        </h5>
      </div>
    </section>
  );
};
