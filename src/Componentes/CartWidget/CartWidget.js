import cart from '../img/cart.svg'
import CartContext from "../ContextoTarjeta/ContextoTarjeta";
import { useContext } from 'react';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="CarritoWidget">
            <img src={cart} height='40' width='40'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget