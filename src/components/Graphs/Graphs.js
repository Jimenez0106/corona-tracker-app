import React from "react";
import TotalCasesGraph from "./TotalCasesGraph";
import TotalDeathsGraph from "./TotalDeathsGraph";

const Graphs = ({ history }) => {
  return (
    <>
      <TotalCasesGraph history={history} />
      <TotalDeathsGraph history={history} />
    </>
  );
};

export default Graphs;
