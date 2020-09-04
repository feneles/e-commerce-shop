import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Shop from "../components/Shop";
import Cart from "../components/Cart";

const Routes = ({ cart, setCart }) => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/shop/:id"
        exact
        component={(props) => <Shop {...props} setCart={setCart} cart={cart} />}
      />
      <Route
        path="/cart"
        exact
        component={(props) => <Cart {...props} setCart={setCart} cart={cart} />}
      />
    </Switch>
  );
};

export default Routes;
