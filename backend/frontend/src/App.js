import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import Alert from "./components/layout/Alert";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/common/PrivateRoute";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "20px",
  transition: transitions.FADE,
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <React.Fragment>
            <Header />
            <Alert />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  );
};

export default App;
