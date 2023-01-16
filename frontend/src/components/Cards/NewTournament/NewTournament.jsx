import React from "react";
import "./NewTournament.css";
import AddIcon from "./../../../images/Plus.svg";

const NewTournament = () => {
  return (
    <div className="card">
      <div className="text__area">
        <h1>Criar Torneio</h1>
      </div>
      <div className="icon__area">
        <img src={AddIcon} alt="Criar Torneio" />
      </div>
    </div>
  );
};

export default NewTournament;
