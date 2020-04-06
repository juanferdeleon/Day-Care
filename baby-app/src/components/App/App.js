import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { configureStore } from "../../store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "../../styles/slideTransition.css";
import RegisterBaby from "../RegisterBaby/index";
import Menu from "../Menu/index";
import Login from "../Login/login";
import Register from "../Register/register";
import * as actions from "../../actions/path";

const store = configureStore();

const getPathDepth = (location) => {
  let pathArr = location.pathname.split("/");
  pathArr = pathArr.filter((n) => n !== "");
  return pathArr.length;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          render={({ location }) => {
            store.dispatch(actions.setPath(getPathDepth(location)));
            const currentKey = location.pathname.split("/")[1] || "/";
            const timeout = { enter: 800 };

            return (
              <TransitionGroup component="div" className="App">
                <CSSTransition
                  key={currentKey}
                  timeout={timeout}
                  classNames="pageSlider"
                  mountOnEnter={false}
                  unmountOnExit={true}
                >
                  <div
                    className={
                      getPathDepth(location) -
                        store.getState().path.pathDepth.prev >=
                      0
                        ? "left"
                        : "right"
                    }
                  >
                    <Switch location={location}>
                      <Route path="/" exact component={Login} />
                      <Route path="/register" exact component={Register} />
                      {/* <Route path="/" exact component={RegisterBaby} />
        <Route path="/menu" component={Menu} /> */}
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </Provider>
  );
}

export default App;
