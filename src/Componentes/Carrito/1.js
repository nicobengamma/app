import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const ItemC = ({ id, quantity, name, img, price }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cartita">
      <div className="card mx-2 p-1">
        <p>{quantity}</p>
        <h5 class="card-title">{name}</h5>
        <img
          class="card-img"
          width="200px"
          height="200px"
          src={img}
          alt={name}
        />
        <div class="card-body">
          <p class="card-text">$ {price}</p>
          <button onClick={() => removeItem(id)}>
            <img src="https://freesvg.org/img/trash.png" height="25" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemC;
