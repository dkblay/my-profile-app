import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import NavBar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
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
      </div>
    );
  }
}

export default App;
