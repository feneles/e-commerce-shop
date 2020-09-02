import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("refresh");
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path={`/shop/:id`} exact component={Shop} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
