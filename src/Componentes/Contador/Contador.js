import { useState } from "react";

const Contador = ({ onAdd, stock, initial = 1 }) => {
  console.log(stock)
  const [count, setCount] = useState(1);

  const incrementar = () => {
    setCount(count + 1)
  }
  const restar = () =>{
    setCount(count - 1)
  }
  return (
    <div>
      <span>Cantidad {count} </span>
      <button onClick={restar}>-</button>
      <button onClick={incrementar}>+</button>
      <br></br>
      <br></br>
      <button onClick={() => onAdd(count)}>Agregar al carro de compras</button>
    </div>
  );
};

export default Contador;
