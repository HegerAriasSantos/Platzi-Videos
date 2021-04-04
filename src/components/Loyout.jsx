import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/components/App.scss";
const Layout = (props) => (
  <div className="App">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
