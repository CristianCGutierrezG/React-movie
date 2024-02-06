import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //Se importa la App.js como un componente

ReactDOM.render(
  //Funcion para renderizar elementos
  // Se le pasa el componente que se quiere renderizar
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //se renderiza el componente en un div
  document.getElementById("root") //root es un div en el documento html
);
