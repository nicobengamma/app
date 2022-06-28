import { useContext, useEffect, useState } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";
import ProductListC from "../Carrito/2";
import { Link } from "react-router-dom";
import CardCredit from "../CardCredit/CardCredit";

const Carrito = ({}) => {
  const { cart } = useContext(CartContext);
  const { deleteAll, totalQuantity } = useContext(CartContext);
  const [compra, setCompra] = useState();
  const [lleno, setLleno] = useState();

  const dat0s = { lleno, compra, cart };

  useEffect(() => {
    if (totalQuantity >= 1) {
      const price1 = cart.map((r) => r.price * r.quantity);
      const result = price1.reduce((a, e) => a + e);
      setLleno(`$ ${result}`);
    } else {
      const vacio = () => (
        <div>
          Carro de compras vacio{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Twemoji_1f62d.svg/1024px-Twemoji_1f62d.svg.png"
            height="50"
          />
          <br></br>
          <br></br>
          <Link to="/">
            <button className="btn btn-primary">
              Regresar a la tienda{" "}
              <img
                src="https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png"
                height="50"
              />
            </button>
          </Link>
        </div>
      );
      setLleno(vacio);
    }
  }, [totalQuantity]);

  // useEffect(() => {
  //   const Compr = () => <div>hola</div>;
  //   setLleno(Compr);
  // }, []);

  return (
    <div className="carrito">
      <div>
        <div>
          <h1>Carrito</h1>
          <span className="botonBasura">
            <a onClick={deleteAll} className="btn btn-primary">
              <img src="https://freesvg.org/img/trash.png" height="25" />{" "}
              Eliminar todo
            </a>
          </span>
          <ProductListC Products={cart} />
          <br></br>
          <h2>Precio Total: {lleno}</h2>
          <br></br>
          <button type="button" class="btn btn-success">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
