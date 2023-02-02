import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import App from "./Memes";
// import App from './Pokemon';
// import App from './AxiosExample';
import App from "./CryptoAxios";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PokemonAxios /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
