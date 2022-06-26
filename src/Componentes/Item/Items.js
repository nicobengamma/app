import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";

const Item = ({ id, name, img, price }) => {
  const context = useContext(Context);

  return (
    <div className="cartita">
      <div className="card mx-2 p-1">
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
          <p class="card-text">
            <Link to={`/detail/${id}`}>Ver Detalles</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
