import { getProductsById } from "../ProductsApi/ProductsApi"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState () 

    const {productId} = useParams ()
    
    useEffect(() => {
        getProductsById(productId).then(response => {

            setProducts(response)
        })
    }, [])
    console.log(products)
    return (
        <>
        <ItemDetail {... products} />
        </>
    )
}

export default ItemDetailContainer