import { useContext, useEffect, useState } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";
import ProductListC from "../Carrito/2";

const Carrito = ({}) => {
  const { cart } = useContext(CartContext);
  const { deleteAll } = useContext(CartContext);
  const [compra, setCompra] = useState();

  const compraRealizada = () => {
    setCompra(alert("Compra Realizada"));
  };

  return (
    <div className="carrito">
      <div>
        <div>
          <h1>Carrito</h1>
          <span className="botonBasura">
            <a onClick={deleteAll} className="btn btn-primary">
              <img src="https://freesvg.org/img/trash.png" height="25" />
            </a>
          </span>
          <ProductListC Products={cart} />
          <br></br>
          <h2>Precio Total : </h2>
          <br></br>
          <button
            onClick={compraRealizada}
            type="button"
            class="btn btn-success"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
