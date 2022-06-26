import Contador from "../Contador/Contador";
import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const ItemDetail = ({ id, name, price, img, stock, description }) => {
  const { addItem } = useContext(CartContext);
  const hacerClick = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`);
    addItem({ id, name, price, quantity, img });
  };
  return (
    <div>
      <div>
        <h2>Detalles del producto</h2>
        <img src={img} alt="..." height="400" />
        <p>Stock: {stock} </p>
        <div>
          <h4>{name}</h4>
          <h3>$ {price}</h3>
          <p>{description}</p>
          <Contador onAdd={hacerClick} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
