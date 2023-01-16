import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import api from "../../services/api";
import "./Modal.css";

const ModalUser = ({ onClose = () => {} }) => {
  const [cpf, setCpf] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [score, setScore] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    api.post("/users", {
      cpf,
      name,
      email,
      score,
    });

    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-header">
          <h1 className="modal-title">Adicionar Usuário</h1>
          <button className="close-button" onClick={onClose}>
            <CloseCircleOutlined />
          </button>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            <div className="form__column-control">
              <div className="form__column-user">
                <div className="modal__form-control">
                  <label>CPF</label>
                  <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
                <div className="modal__form-control">
                  <label>Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form__column-user">
                <div className="modal__form-control">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="modal__form-control">
                  <label>Pontuação</label>
                  <input
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.valueAsNumber)}
                  />
                </div>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" className="modal__button">
                Adcionar Usuário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
