import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import api from "../../services/api";
import "./Modal.css";

const ModalTournament = ({ onClose = () => {} }) => {
  const [name, setName] = useState([]);
  const [size, setSize] = useState([]);
  const [location, setLocation] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    api.post("/tournaments", {
      name,
      size,
      location,
    });

    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-header">
          <h1 className="modal-title">Adicionar Torneio</h1>
          <button className="close-button" onClick={onClose}>
            <CloseCircleOutlined />
          </button>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            <div className="modal__form-control">
              <label>Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="modal__form-control">
              <label>Total de Paricipantes</label>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.valueAsNumber)}
              />
            </div>
            <div className="modal__form-control">
              <label>Local</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="button-area">
              <button type="submit" className="modal__button">
                Adicionar Torneio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalTournament;
