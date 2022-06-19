import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const Carrito = () => {
  const { totalQuantity } = useContext(CartContext);

  // const totalQuantity = getCardQuantity();
  return (
    <div>
      <h1>Carrito</h1>
      <h2>{totalQuantity}</h2>
      <button>Vaciar el carro</button>
    </div>
  );
};

export default Carrito;
