import { useContext, useEffect, useState } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";
import ProductListC from "../Carrito/2";
import { Link } from "react-router-dom";
import CardCredit from "../CardCredit/CardCredit";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  const { deleteAll, totalQuantity } = useContext(CartContext);
  const [compra] = useState();
  const [lleno, setLleno] = useState();
  const [formulario, setFormulario] = useState();

  const dat0s = { lleno, compra, cart };
  const formCompra = () => {
    if (totalQuantity >= 1) {
      setFormulario(<CardCredit {...dat0s} />);
    }
  };

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
            alt="imagen de un carro de compras "
          />
          <br></br>
          <br></br>
          <Link to="/">
            <button className="btn btn-primary">
              Regresar a la tienda{" "}
              <img
                src="https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png"
                height="50"
                alt="Emoji"
              />
            </button>
          </Link>
        </div>
      );
      setLleno(vacio);
    }
  }, [totalQuantity]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="carrito">
      <div>
        <div>
          <h1>Carrito</h1>
          <ProductListC Products={cart} />
          <br></br>
          <h3>Precio Total: {lleno}</h3>
          <br></br>
          <span className="botonBasura">
            <button onClick={deleteAll} className="btn btn-primary mx-2">
              <img
                src="https://freesvg.org/img/trash.png"
                height="25"
                alt="boton"
              />{" "}
              Eliminar todo
            </button>
          </span>

          <button
            onClick={formCompra}
            type="button"
            className="btn btn-success mx-2"
          >
            Continuar Compra
          </button>

          {formulario}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
