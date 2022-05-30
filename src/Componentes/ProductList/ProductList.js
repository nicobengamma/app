import Item from "../item/item"

const ProductList = ({Products}) => {
    return (
        <ul>
                {Products.map(Products=> <Item key={Products.id} {...Products}/>)}
            </ul>
    )
}

export default ProductList