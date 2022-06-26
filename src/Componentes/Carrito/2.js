import ItemC from "../Carrito/1";

const ProductListC = ({ Products }) => {
  return (
    <div>
      {Products.map((Products) => (
        <ItemC key={Products.id} {...Products} />
      ))}
    </div>
  );
};

export default ProductListC;
