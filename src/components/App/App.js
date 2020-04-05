import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { configureStore } from "../../store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import RegisterBaby from "../RegisterBaby/index";
import Menu from "../Menu/index";
import Login from "../Login/login";
import Register from "../Register/register";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  {/* <Route path="/" exact component={RegisterBaby} />
        <Route path="/menu" component={Menu} /> */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </Provider>
  );
}

export default App;
