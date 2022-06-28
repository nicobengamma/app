import { useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children, stock }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const del3t3 = [];

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    setTotalQuantity(totalQuantity);
  }, [cart]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };
  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };
  const deleteAll = () => {
    setCart(del3t3);
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        addItem,
        removeItem,
        isInCart,
        deleteAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
