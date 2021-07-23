import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";

import { Home } from "./components/Home";
import {NavBar} from "./components/NavBar";
import { Auth } from "./components/Auth";
import ReduxForm from "./components/Form/ReduxForm";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/new' exact component={ReduxForm} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
