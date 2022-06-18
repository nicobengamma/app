import Contador from "../Contador/Contador"
import { useContext } from "react"
import CartContext from "../ContextoTarjeta/ContextoTarjeta"

const ItemDetail = ({id, name, price, img, stock, description}) => {

    const { addItem} = useContext (CartContext)
    const hacerClick = (quantity) => {
        addItem({id, name, price, quantity})
      }

    return (
    <div>
        <br></br>
        <h2>Detalles del producto</h2>
        <h4>{name}</h4>
        <img src={img}/>
        Stock: {stock} <Contador onAdd={hacerClick}/>
        <br></br>
        <h3>$ {price}</h3> 
        {description}
        <br></br>
        <br></br>
        <h4>Derechos Reservados</h4>
    </div>
    )
}


export default ItemDetail