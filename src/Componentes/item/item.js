const Item = ({ name, img }) => {
  return (
    <li>
      <img width="200px" height="200px" src={img} alt={name} />
      {name}
    </li>
  );
};

export default Item;
