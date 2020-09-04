import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routing/routes";
import "./App.scss";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Header />
      <Routes cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
