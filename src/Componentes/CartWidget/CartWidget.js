import cart from "../img/cart.svg";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";
import { useContext } from "react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  if (totalQuantity >= 1) {
    return (
      <div className="CarritoWidget">
        {totalQuantity}
        <img src={cart} height="37" />
      </div>
    );
  }
};

export default CartWidget;
