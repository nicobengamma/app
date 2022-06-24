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
      <div class="card w-50 text-center offset-3 col-10 my-2">
      <h2>Detalles del producto</h2>
  <img src={img} class="card-img-top" alt="..."/>
  <p>Stock: {stock} </p>
  <div class="card-body">
    <h4 class="card-title">{name}</h4>
    <h3>$ {price}</h3>
    <p class="card-text">{description}</p>
    <Contador onAdd={hacerClick} />
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
};

export default ItemDetail;
