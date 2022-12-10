import React from "react";
import Fondo from "../img/fotoFondo.jpg";

const HomePage = () => {
  return (
    <div className="home">
        <span className="home-title">Desde hace mas 50 años proveyendo a la industria </span>
        <span className="home-title">con la mayor variedad y el mejor precio</span>
        <div><img src={Fondo} alt="imagen de bulones"></img></div>
        <span className="home-title">Si existe y no lo tenemos lo conseguimos. Consúltenos</span>
    </div>
  );
};

export default HomePage;