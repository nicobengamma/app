import Contador from "../Contador/Contador";
import { Children, useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const ItemDetail = ({ id, name, price, img, stock, description }) => {
  const { addItem } = useContext(CartContext);
  const hacerClick = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`);
    addItem({ id, name, price, quantity, img });
  };
  const products = { id, name, price, stock };
  return (
    <div id="gDetail" className="card-group">
      <div className="col-sm-6 my-5">
        <img
          className="col-sm-8 mx-auto d-block"
          src={img}
          height="500"
          alt="..."
        />
        <div className="card-body">
          <p>Stock: {stock} </p>
        </div>
      </div>
      <div id="Count1" className="card m-5 p-1">
        <h2>{name}</h2>
        <h3>$ {price}</h3>
        <p className="card-text">{description}</p>
        <Contador onAdd={hacerClick} {...products} />
      </div>
    </div>
  );
};

export default ItemDetail;
