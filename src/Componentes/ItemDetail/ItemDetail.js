const ItemDetail = ({name, price}) => {
    return (
    <div>
        <h1>Detalles del producto</h1>{name}
        <br></br>
        $ {price}
    </div>
    )
}

export default ItemDetail