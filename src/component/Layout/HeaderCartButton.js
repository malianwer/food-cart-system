import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import useCart from "../../store/useCart";
import Cart, { Modal } from "../Cart/Cart";
import CartIcons from "../Cart/CartIcons";
import classes from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const { cart } = useCart();

  const [show, setShow] = useState(false);

  return (
    <button className={classes.button} onClick={() => setShow(true)}>
      <span className={classes.icon}>
        <CartIcons />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {cart.length} </span>
      {show ? <Cart onClose={() => setShow(false)} /> : null}
    </button>
  );
};

export default HeaderCartButton;
