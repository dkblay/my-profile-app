import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <nav>This is the nav bar</nav>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <Component {...props} {...rest} />}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
