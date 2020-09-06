import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Routes = ({ cart, setCart }) => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Switch locatio={location}>
              <Route path="/" exact component={Main} />
              <Route
                path="/shop/:id"
                exact
                component={(props) => (
                  <Shop {...props} setCart={setCart} cart={cart} />
                )}
              />
              <Route
                path="/cart"
                exact
                component={(props) => (
                  <Cart {...props} setCart={setCart} cart={cart} />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Routes;
