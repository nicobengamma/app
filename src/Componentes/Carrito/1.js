const ItemC = ({ quantity, name, img, price }) => {
  return (
    <div className="cartita">
      <div className="card mx-2 p-1">
        <p>{quantity}</p>
        <h5 class="card-title">{name}</h5>
        <img
          class="card-img"
          width="200px"
          height="200px"
          src={img}
          alt={name}
        />
        <div class="card-body">
          <p class="card-text">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemC;
