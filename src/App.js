import React, {useState} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routing/routes";
import Cart from "./components/Cart";

import "./App.scss";

function App() {
  const [cart, setCart] = useState("");

  const handleStateChange = (e) => {
    setCart(e.target.value);
  }

  return (
      <div className="app">
        <input onChange={handleStateChange}></input>
        <Header />
        <Routes />
        <Footer />
        <Cart isVisible={cart} setVisibility={setCart} />
      </div>
  );
}

export default App;
