import { useContext, useState } from "react";
import CartContext from "./cart-context";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (id) => {
    setCart((prevState) => {
      return prevState.filter((arrData) => arrData.id !== id);
    });
  };

  const increaseQuantity = (id) => {
    const inQ = cart.map((i) => {
      if (i.id === id) {
        return { ...i, quantity: i.quantity + 1 };
      } else {
        return i;
      }
    });
    setCart(inQ);
  };
  const decreaseQuantity = (id) => {
    const deQ = cart.map((i) => {
      if (i.id === id) {
        return { ...i, quantity: i.quantity - 1 };
      } else {
        return i;
      }
    });
    setCart(deQ);
  };

  return {
    cart,
    addItemToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  };
};

export default useCart;
