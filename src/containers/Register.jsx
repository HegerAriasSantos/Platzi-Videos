import "../assets/styles/components/Register.scss";
import { connect } from "react-redux";
import { login_request } from "../actions/index";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [Form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.login_request(Form);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form">
          <input
            onChange={handleChange}
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            value={Form.name}
          />
          <input
            onChange={handleChange}
            name="email"
            className="input"
            type="email"
            placeholder="Correo"
            value={Form.email}
          />
          <input
            onChange={handleChange}
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            value={Form.password}
          />
          <button onClick={handleClick} type="submit" className="button">
            Registrarme
          </button>
        </form>
        <Link to="/login"> Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  login_request,
};

export default connect(null, mapDispatchToProps)(Register);
