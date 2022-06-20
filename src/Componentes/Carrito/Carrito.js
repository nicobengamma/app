import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const Carrito = ({ removeItem }) => {
  const { totalQuantity } = useContext(CartContext);

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
          </p>
          <a onClick={() => removeItem} className="btn btn-primary">
            Vaciar carrito
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
