import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const ItemC = ({ id, quantity, name, img, price }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cartitaCart">
      <div className="card mx-2 p-1">
        <p>{quantity}</p>
        <h5 className="card-title">{name}</h5>
        <img
          className="card-img"
          width="200px"
          height="200px"
          src={img}
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">$ {price}</p>
          <button onClick={() => removeItem(id)}>
            <img
              src="https://freesvg.org/img/trash.png"
              height="25"
              alt="imagen tacho de basura"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemC;
