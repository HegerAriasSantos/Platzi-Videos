import React from "react";
import "../assets/styles/components/Search.scss";
import { useLocation } from "react-router-dom";

const Search = () => {
  const search = useLocation().pathname === "/" ? "isHome" : "";

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={`input ${search}`}
        placeholder="Buscar..."
      />
    </section>
  );
};

export default Search;
