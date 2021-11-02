import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Product from "./pages/Product";

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:productId" component={Product} />
    </Switch>
  </div>
);

export default MainRouter;
