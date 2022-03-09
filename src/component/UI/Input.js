import React from "react";
import classes from "../UI/Input.module.css";
import "../../App.css";

const Input = ({
  input,
  label,
  handleIncrement,
  handleDecrement,
  buttonDisabled = true,
}) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <button
        disabled={buttonDisabled}
        className="cart-button"
        onClick={handleDecrement}
      >
        -
      </button>
      <input {...input} />
      <button
        disabled={buttonDisabled}
        className="cart-button"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Input;
