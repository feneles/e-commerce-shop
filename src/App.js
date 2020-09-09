import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routing/routes";
import "./App.scss";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className={isActive ? "app app_active" : "app"}>
      <Header isActive={isActive} setIsActive={setIsActive} cart={cart} />
      <Routes cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
