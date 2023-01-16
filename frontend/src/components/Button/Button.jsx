import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = () => {
  return (
    <div className="btn__container">
      <a href="/home">
        <button className="btn__left" type="submit">
          Entrar
        </button>
      </a>
      <a href="/register">
        <button className="btn__right">Registrar</button>
      </a>
    </div>
  );
};

export default Button;
