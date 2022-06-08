import { getProducts } from "../ProductsApi/ProductsApi";
import { getProductsByCategory } from "../ProductsApi/ProductsApi";
import { useEffect, useState } from 'react'
import ProductList from '../ProductList/ProductList'
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [Products, setProducts ] = useState([])

    const {categoryId} = useParams ()
    console.log(categoryId)

    useEffect(() => {
        if (!categoryId) {
        getProducts().then(response => {
            setProducts(response)
        })} else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)})
        }
    },[])
    return (
        <div>
            <h1>{props.titulo}</h1>
            <ProductList Products={Products}/>
        </div>
    )
}

export default ItemListContainer ;