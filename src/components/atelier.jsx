import React from "react";

const Atelier = ({ match, history }) => {
  return (
    <div>
      <h1>Atelier {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/ateliers")}
      >
        Enregistrer
      </button>
    </div>
  );
};

export default Atelier;
