import { useContext } from "react";
import CartContext, { CartProvider } from "../ContextoTarjeta/ContextoTarjeta";

const Carrito = ({ removeItem }) => {
  const { totalQuantity } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { name, price, img } = cart[0];

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1>Carrito</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">Productos</h5>
          <p className="card-text">
            <h2>{totalQuantity}</h2>
            <img src={img} />
            <p>
              {name}
              {price}
            </p>
          </p>
          <a className="btn btn-primary">Finalizar Compra</a>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
