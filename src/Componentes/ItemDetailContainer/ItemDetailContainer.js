import { getProducts } from "../ProductsApi/ProductsApi"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [Products, setProducts] = useState () 
    useEffect(() => {
        getProducts('1').then(response => {

            setProducts(response)
        })
    }, [])
    return (
        <div>
        <h1>Detalle del producto</h1>
        <ItemDetail {... Products} />
        </div>
    )

}

export default ItemDetailContainer