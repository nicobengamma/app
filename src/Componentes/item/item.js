import { Link } from "react-router-dom";

const Item = ({ id, name, img, price}) => {
  return (
    <div>
      <img width="200px" height="200px" src={img} alt={name} />
      <br/>
      <h2>{name}</h2>
      <h4>$ {price}</h4>
      <Link to={`/detail/${id}`}>Ver Detalles</Link>
      <br/>
      <br/>
    </div>
  );
};

export default Item;
