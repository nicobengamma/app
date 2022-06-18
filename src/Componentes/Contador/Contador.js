import { useState } from "react";


const Contador = ({ onAdd, stock, initial = 1}) => {
  const [count, setCount] = useState(1);
    return (
      <div>
        <span>Cantidad {count} </span>

        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <br></br>
        <br></br>
        <button onClick={() => onAdd(count)}>Agregar al carro de compras</button>
      </div>
    );
}


export default Contador 