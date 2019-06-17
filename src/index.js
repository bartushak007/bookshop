import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./styles/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Index = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
