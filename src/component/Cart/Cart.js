import React from "react";
import ReactDOM from "react-dom";
import useCart from "../../store/useCart";
import classes from "../Cart/Cart.module.css";

const modalElement = document.getElementById("modal");

export const Modal = ({ children }) => {
  const element = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );

  return ReactDOM.createPortal(element, modalElement);
};

const Cart = ({ onClose }) => {
  const { cart, removeItemFromCart } = useCart();

  const calculateTotalAmount = () => {
    if (!cart.length) return 0;
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += parseFloat(item.price * item.quantity);
    });

    return totalAmount.toFixed(2);
  };

  return (
    <Modal>
      <div
        style={{
          backgroundColor: "white",
          width: "35%",
          padding: "20px",
          borderRadius: "30px",
        }}
      >
        {cart.map((item) => {
          return (
            <ul className={classes["cart-items"]}>
              <li>
                {item.name} X {item.quantity}
              </li>
              <button
                className="delete-button"
                onClick={() => {
                  console.log("deleted");
                  removeItemFromCart(item.id);
                }}
              >
                Delete
              </button>
            </ul>
          );
        })}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${calculateTotalAmount()}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            Closed
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
