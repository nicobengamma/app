import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";

const Item = ({ id, name, img, price}) => {

  const context = useContext (Context) 
  console.log(context)


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
