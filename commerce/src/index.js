import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@clayui/css/lib/css/atlas.css";
import { ClayIconSpriteContext } from "@clayui/icon";
import spritemap from './icons.svg';
import './styles/global.scss';

ReactDOM.render(
  <ClayIconSpriteContext.Provider value={spritemap}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClayIconSpriteContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();