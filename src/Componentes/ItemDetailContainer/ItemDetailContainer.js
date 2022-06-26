import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const ref = doc(db, "items", productId);

    getDoc(ref)
      .then((r) => {
        const productnew = { id: r.id, ...r.data() };
        setProducts(productnew);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ItemDetail {...products} />
    </>
  );
};

export default ItemDetailContainer;
