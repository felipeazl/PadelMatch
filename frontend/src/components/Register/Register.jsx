import React from "react";
import "./Register.css";
import Button from "./../Button/Button";
import Logo from "./../../images/Logo.svg";

const Register = () => {
  return (
    <div className="page__register">
      <a href="/">
        <img src={Logo} alt="Padel Match" className="img-logo" />
      </a>
      <div className="register__container">
        <div className="form__column">
          <form>
            <div className="form__control">
              <label className="register__label">Nome</label>
              <input className="register__input"></input>
            </div>
            <div className="form__control">
              <label className="register__label">Email</label>
              <input className="register__input"></input>
            </div>
            <div className="form__control">
              <label className="register__label">Senha</label>
              <input className="register__input"></input>
            </div>
          </form>
        </div>
        <div className="separator"></div>
        <div className="form__column">
          <form>
            <div className="form__control">
              <label className="register__label">Telefone</label>
              <input className="register__input"></input>
            </div>
            <div className="form__control">
              <label className="register__label">CPF</label>
              <input className="register__input"></input>
            </div>
            <div className="form__control">
              <label className="register__label">Cidade</label>
              <input className="register__input"></input>
            </div>
          </form>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Register;
