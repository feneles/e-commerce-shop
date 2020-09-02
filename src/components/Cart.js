import React from "react";

const Cart = ({ isVisible, setVisibility }) => {
    return isVisible ? (<div className="cart empty">
        KOSZYK!
        <button onClick={() => setVisibility('')}>x</button>
    </div>) : null
}

export default Cart;