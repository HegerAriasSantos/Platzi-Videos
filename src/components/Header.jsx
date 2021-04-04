import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { logout_request } from "../actions/index";

const Header = (props) => {
  const headerClass =
    useLocation().pathname === "/logup" || useLocation().pathname === "/login"
      ? "greenHeader"
      : "";
  const { user } = props;
  const handleLogout = () => {
    props.logout_request({}); // objeto vacio para reiniciar el usuario y dejarlo vacio.
  };
  return (
    <>
      <header className={`header ${headerClass}`}>
        <Link to="/">
          <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img
              src={
                Object.keys(user).length > 0 ? gravatar(user.email) : userIcon
              }
              alt={user.email}
            />

            <p>Perfil</p>
          </div>
          <ul>
            {Object.keys(user).length > 0 ? (
              <>
                <li>
                  <Link to="/login">{user.name}</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Cerrar Sesión
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/logup">Iniciar seccion</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const dispatchToProps = {
  logout_request,
};
export default connect(mapStateToProps, dispatchToProps)(Header);
