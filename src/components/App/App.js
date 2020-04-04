import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { configureStore } from "../../store";
import "./App.css";
import RegisterBaby from "../Register/index";
import Menu from "../Menu/index";
import Login from "../Login/login";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Login} />
        {/* <Route path="/" exact component={RegisterBaby} />
        <Route path="/menu" component={Menu} /> */}
      </Router>
    </Provider>
  );
}

export default App;
