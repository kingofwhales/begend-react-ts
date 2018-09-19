import * as React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Hello from "./containers/Hello";
import StatefulHello  from "./components/StatefulHello";
import { Provider } from "react-redux";
import { store } from "./store";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/about" component={StatefulHello} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
