import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { db } from "../../services/firebase";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { useContext } from "react";
import CartContext from "../ContextoTarjeta/ContextoTarjeta";

const CardCredit = ({ lleno, cart }) => {
  const { deleteAll, totalQuantity } = useContext(CartContext);
  const enviar = () => {
    console.log("funciona el boton");
    const nTarjeta = document.getElementById('cardtarj').value
    const nombreTarjeta = document.getElementById('cardTitular').value
    const vencimiento = document.getElementById('vencimiento').value
    const codSeguridad = document.getElementById('codigoSeguridad').value
    const postal = document.getElementById('postal').value
    const nombre = document.getElementById('nombre').value
    const ciudad = document.getElementById('ciudad').value
    const provincia = document.getElementById('provincia').value
    const emailto= document.getElementById('email').value


    const newOrders = {
      comprador: {
        CardNumber: {nTarjeta} ,
        CardName:{nombreTarjeta},
        CardVencimiento: {vencimiento},
        CardCodSeg:{codSeguridad},
        zip:{postal},
        name: {nombre},
        city: {ciudad},
        state: {provincia},
        email: {emailto},
      },
      producto: { cart },
      fecha: new Date(),
      total: { lleno },
    };

    const batch = writeBatch(db);
    const ids = cart.map((prod) => prod.id);
    const productsRef = collection(db, "items");
    const outOfStock = [];
    getDocs(query(productsRef, where(documentId(), "in", ids)))
      .then((r) => {
        r.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;
          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else outOfStock.push({ id: doc.id, ...dataDoc });
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");

          return addDoc(collectionRef, newOrders);
        } else {
          return Promise.reject({ type: "out_of_stock", produts: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        deleteAll();
        console.log(id);
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          console.log("Hay productos que no tienen stock ");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="card col-sm-5 mx-auto d-block p-4 my-4">
      <img src="https://svgsilh.com/svg/1300155.svg" height="200" />
      <form className="row py-3 g-3 needs-validation" novalidate>
        <div className="col-md-4">
          <label for="cardtarj" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardtarj"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="cardTitular" className="form-label">
            Cardholder
          </label>
          <input
            type="text"
            className="form-control"
            id="cardTitular"
            placeholder="Mark Otto Nailders"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-2">
          <label for="vencimiento" className="form-label">
            Expiry
          </label>
          <input
            type="text"
            className="form-control"
            id="vencimiento"
            placeholder="xx/xx"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-2">
          <label for="codigoSeguridad" className="form-label">
            S/Code
          </label>
          <input
            type="text"
            className="form-control"
            id="codigoSeguridad"
            placeholder="xxx"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-2">
          <label for="postal" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="postal"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-md-4">
          <label for="nombre" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Mark Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label for="ciudad" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="ciudad"
            placeholder="Rosario"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label for="provincia" className="form-label">
            State
          </label>
          <select className="form-select" id="provincia" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Corrientes</option>
            <option>Mendoza</option>
            <option>Cordoba</option>
            <option>Salta</option>
            <option>La Pampa</option>
            <option>Santa Cruz</option>
            <option>Buenos Aires</option>
            <option>Santa fe</option>
            <option>San Luis</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="check"
              required
            />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button onClick={enviar} type="button" className="btn btn-primary">
            <img
              className="m-1"
              src="https://images.vexels.com/media/users/3/136535/isolated/preview/393a7d8e436bccc3aedfd43865b48890-candado.png"
              height="20"
            />
            Pay {lleno}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardCredit;
