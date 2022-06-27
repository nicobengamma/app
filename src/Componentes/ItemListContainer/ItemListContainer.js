import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [Products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef)
      .then((r) => {
        const productsNew = r.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsNew);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <div>
      <h1>Productos</h1>
      <h1>{props.titulo}</h1>
      <ProductList Products={Products} />
    </div>
  );
};

export default ItemListContainer;
