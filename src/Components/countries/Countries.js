import React from "react";
import { Input } from "../Input/Input";

import { CardCountries } from "./CardCountries";

import "./Countries.css";

export const Countries = ({ data, Loading, handleAdvance, fetch }) => {
  return (
    <>
      <Input fetch={fetch} />
      {Loading && <p className="loading"></p>}
      <section className="container-countries">
        {data.length > 0 &&
          data.map((req) => {
            return (
              <CardCountries
                key={req.name}
                {...req}
                handleAdvance={handleAdvance}
              />
            );
          })}
      </section>
    </>
  );
};
