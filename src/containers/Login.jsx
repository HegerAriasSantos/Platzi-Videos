import "../assets/styles/components/Login.css";
import Google from "../assets/static/google-icon.png";
import Twitter from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { connect } from "react-redux";
import { login_request } from "../actions/index";

const Login = (props) => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login_request(Form);
    props.history.push("/");
  };
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleChange}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={Google} /> Inicia sesión con Google
          </div>
          <div>
            <img src={Twitter} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/logup">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  login_request,
};
export default connect(null, mapDispatchToProps)(Login);
