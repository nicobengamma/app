 import { useState } from "react";
 import { createContext } from "react";

 const CartContext = createContext ()

 export const CartProvider = ({ children }) => {
     const [cart, setCart] = useState ([])
     console.log(cart)

   const addItem = (productToAdd) => {
     if(!isInCart(productToAdd.id)){
       setCart ([...cart, productToAdd])
     } 
 }
   const removeItem = (id) => {
    const cartWithoutProduct = cart.filter (prod => prod.id !== id)
  setCart(cartWithoutProduct)
   }
   const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
   }


   return (
     <CartContext.Provider value={{ cart, addItem, removeItem}}>
      { children }
      </CartContext.Provider>
    )

 } 

 export default CartContext
