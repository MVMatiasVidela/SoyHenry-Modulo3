import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
