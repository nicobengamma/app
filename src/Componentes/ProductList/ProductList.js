import Item from "../Item/Items";

const ProductList = ({ Products }) => {
  return (
    <div>
      {Products.map((Products) => (
        <Item key={Products.id} {...Products} />
      ))}
    </div>
  );
};

export default ProductList;
