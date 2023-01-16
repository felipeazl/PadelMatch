import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import api from "../../services/api";
import "./Modal.css";

const ModalPairs = ({ onClose = () => {} }) => {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    api.post("/pairs", {
      player1,
      player2,
    });

    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-header">
          <h1 className="modal-title">Adicionar Dupla</h1>
          <button className="close-button" onClick={onClose}>
            <CloseCircleOutlined />
          </button>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            <div className="modal__form-control">
              <label>Jogador 1</label>
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
              />
            </div>
            <div className="modal__form-control">
              <label>Jogador 2</label>
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
              />
            </div>
            <div className="button-area">
              <button type="submit" className="modal__button">
                Adicionar Dupla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPairs;
