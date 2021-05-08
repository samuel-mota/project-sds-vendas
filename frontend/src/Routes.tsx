import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
