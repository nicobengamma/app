import { useState } from "react";

const MercadoLibre = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  const clickSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((Response) => {
        return Response.json();
      })
      .then((res) => {
        setProducts(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>MercadoLibre</h1>
      <form onSubmit={clickSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {products.map((prod) => {
          return (
            <li key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <p>{prod.title}</p>
              <p>{prod.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MercadoLibre;
