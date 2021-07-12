import React, { useState, useEffect } from "react";

import "./Input.css";
export const Input = ({ fetch }) => {
  //state input

  const [state, setstate] = useState("");

  useEffect(() => {
    state.trim().length < 1 && fetch("https://restcountries.eu/rest/v2/all");
  }, [state]);

  const handleInput = (e) => {
    setstate(e.target.value);

    setTimeout(() => {
      if (state.trim().length > 1) {
        fetch(`https://restcountries.eu/rest/v2/name/${state}`);
        window.localStorage.setItem("estado", state);
      }
    }, 1750);
  };
  const handleSelect = (e) => {
    const region = e.target.value;
    if (region === "all") {
      fetch("https://restcountries.eu/rest/v2/all");
    } else {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleInput}
        value={state}
      />
      <select onChange={handleSelect}>
        <option value="all" key="all">
          Filter by Region
        </option>
        <option value="Americas" key="Americas">
          America
        </option>
        <option value="Africa" key="Africa">
          Africa
        </option>
        <option value="Asia" key="Asia">
          Asia
        </option>
        <option value="Europe" key="Europe">
          Europa
        </option>
        <option value="Oceania" key="Oceania">
          Oceania
        </option>
      </select>
    </form>
  );
};
