import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import useCart from "../../store/useCart";
import classes from "../Meals/MealItemFrom.module.css";
import Input from "../UI/Input";

const MealItemsFrom = ({ itemToAdd }) => {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();

  const [quantity, setQuantity] = useState(
    itemToAdd.quantity ? itemToAdd.quantity : 1
  );
  const disabled = cart.find((item) => item.id === itemToAdd.id);
  const { addItemToCart } = useCart();

  return (
    <div>
      <div className={classes.form}>
        <Input
          label="Quantity"
          buttonDisabled={!cart.find((item) => item.id === itemToAdd.id)}
          handleIncrement={() => {
            setQuantity(quantity + 1);
            increaseQuantity(itemToAdd.id);
          }}
          handleDecrement={() => {
            if (quantity !== 1) {
              setQuantity(quantity - 1);
              decreaseQuantity(itemToAdd.id);
            }
          }}
          input={{
            id: "amount",
            type: "text",
            step: "1",
            value: quantity,
            onChange: (e) => {
              setQuantity(e.target.value);
            },
          }}
        />

        <button
          className={disabled ? classes.disable : classes.add}
          onClick={() => addItemToCart({ ...itemToAdd, quantity })}
          disabled={disabled}
          // style={{? backgroundColor:"gray" : backgroundColor: "#8a2b06"}}
        >
          {disabled ? "Added" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default MealItemsFrom;
