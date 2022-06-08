const ItemDetail = ({name, price, img, stock, description}) => {
    return (
    <div>
        <br></br>
        <h2>Detalles del producto</h2>
        <h4>{name}</h4>
        <img src={img}/>
        Stock: {stock}
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