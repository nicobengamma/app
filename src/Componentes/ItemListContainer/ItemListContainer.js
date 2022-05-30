import { getProducts } from "../ProductsApi/ProductsApi";
import { useEffect, useState } from 'react'
import ProductList from '../ProductList/ProductList'

const ItemListContainer = (props) => {
    const [Products, setProducts ] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    },[])
    return (
        <div>
            <h1>{props.titulo}</h1>
            <ProductList Products={Products}/>
        </div>
    )
}

export default ItemListContainer ;