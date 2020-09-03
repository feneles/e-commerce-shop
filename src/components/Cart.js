import React from "react";

function Cart({ cart, setCart }) {
  console.log(cart);
  return (
    <div className="cart">
      {cart.length > 0 ? (
        cart
      ) : (
        <h3 className="cart_empty">Twój koszyk jest pusty</h3>
      )}
    </div>
  );
}

export default Cart;
