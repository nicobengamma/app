import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  
  return (
    <Link to={`/detail/${id}`}>
      <div className="cartita">
        <div className="card mx-2 p-2">
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
            <p className="card-text">
              <button type="button" className="btn btn-outline-secondary" disabled>
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
