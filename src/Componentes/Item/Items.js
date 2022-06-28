import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";

const Item = ({ id, name, img, price }) => {
  const context = useContext(Context);

  return (
    <Link to={`/detail/${id}`}>
      <div className="cartita">
        <div className="card mx-2 p-2">
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
              <button type="button" class="btn btn-outline-secondary" disabled>
                Haz click para ver mas detalles
              </button>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
