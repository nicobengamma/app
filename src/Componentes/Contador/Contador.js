import { useContext, useState } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const Contador = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(1);
  const incrementar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h4>Cantidad</h4>
      <button
        id="operator"
        class="btn btn-dark"
        onClick={count > 1 ? restar : null}
      >
        -
      </button>
      <span> {count} </span>
      <button
        id="operator"
        class="btn btn-dark"
        onClick={count < stock ? incrementar : null}
      >
        +
      </button>
      <br></br>
      <br></br>
      <button class="btn btn-success" onClick={() => onAdd(count)}>
        Agregar al carro de compras
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Contador;
