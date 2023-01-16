import React from "react";
import "./AddUser.css";
import AddIcon from "./../../../images/Plus.svg";

const AddUser = () => {
  return (
    <div className="card">
      <div className="text__area">
        <h1>Adicionar Usuário</h1>
      </div>
      <div className="icon__area">
        <img src={AddIcon} alt="Criar Torneio" />
      </div>
    </div>
  );
};

export default AddUser;
