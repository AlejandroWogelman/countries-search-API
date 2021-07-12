import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Countries } from "../countries/Countries";

import { Advanced } from "../page/Advanced";

export const Routes = ({ data, fetch, Loading }) => {
  const [advance, setAdvance] = useState("");

  const handleAdvance = (select) => {
    const newSelect = data.filter((country) => country.name === select);
    setAdvance(newSelect);
  };

  return (
    <Router>
      <Route path="/" exact>
        <Countries
          data={data}
          Loading={Loading}
          handleAdvance={handleAdvance}
          fetch={fetch}
        />
      </Route>
      <Route path="/advanced">
        <Advanced advance={advance} />
      </Route>
    </Router>
  );
};
