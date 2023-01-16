import React from "react";
import "./AddPairs.css";
import AddIcon from "./../../../images/Plus.svg";

const AddPairs = () => {
  return (
    <div className="card">
      <div className="text__area">
        <h1>Adicionar Dupla</h1>
      </div>
      <div className="icon__area">
        <img src={AddIcon} alt="Criar Torneio" />
      </div>
    </div>
  );
};

export default AddPairs;
