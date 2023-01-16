import React from "react";
import Button from "./../Button/Button";
import Logo from "./../../images/Logo.svg";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  function Login(e) {
    e.preventDefault();
    console.log(user + password);
    if (user === "admin" && password === "admin") {
      window.location.href("/home");
    }
  }

  return (
    <div className="page__container">
      <img src={Logo} alt="Padel Match" />
      <div className="login__container">
        <form onSubmit={Login}>
          <div className="form__control">
            <label
              className="login__label"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            >
              Email
            </label>
            <input className="login__input"></input>
          </div>
          <div className="form__control">
            <label
              className="login__label"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              Senha
            </label>
            <input className="login__input"></input>
          </div>
        </form>
      </div>
      <Button></Button>
    </div>
  );
};

export default Login;
