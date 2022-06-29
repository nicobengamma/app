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
    const newOrders = {
      comprador: {
        name: "nicolas",
        city: "rosario",
        state: "santa fe",
        email: "asddasasd@dsadas.ok",
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
      <form class="row py-3 g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">
            Card Number
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Cardholder
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Mark Otto Nailders"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-2">
          <label for="validationCustom03" class="form-label">
            Expiry date
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="xx/xx"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-2">
          <label for="validationCustom04" class="form-label">
            S/Code
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="xxx"
            required
          />
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-2">
          <label for="validationCustom05" class="form-label">
            Zip
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            required
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Mark Otto"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Rosario"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            State
          </label>
          <select class="form-select" id="validationCustom04" required>
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
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="col-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
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
