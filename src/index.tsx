import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createStore } from "redux";
import { initialState, todoReducer } from "./docks/todo/reducers";
import { Provider } from "react-redux";

const store = createStore(todoReducer, initialState);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
