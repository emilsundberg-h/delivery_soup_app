import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import './Cart.css';
// import Bread from "./Bread";

const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  });

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < props.cart.length; i++) {
      totalVal += props.cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const cartItems = props.cart.map((cartItem) => (
    <div className="cartitmes" key={cartItem.uid}>
      <p className="cartitmesP">{`${cartItem.name}`}</p>
      <p className="cartitmesPrice">{`${cartItem.price}`} SEK</p>
      <input
        type="submit"
        value="x"
        className="removeB"
        onClick={() => props.onRemoveItem(cartItem)}
      />
    </div>
  ));

  return (
    <div>
      <p className="orderP">Your Order</p>
      <div className="cartitmesDiv">
        <p>{cartItems}</p>
      </div>
      <div className="cartTotalDiv">
        <p className="cartTotalP">AMOUNT:</p>
        <p className="cartTotalNumber">{cartTotal} </p>
        <p className="cartTotalSek">SEK</p>
      </div>
    </div>
  );
};


export default Cart;
