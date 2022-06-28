const CardCredit = ({ lleno }) => {
  console.log(lleno);
  return (
    <div className="card col-sm-6 mx-auto d-block p-4 my-4">
      <form class="row g-3 needs-validation" novalidate>
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
            Security Code
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
        <div class="col-12">
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
          <button className="btn btn-primary" type="submit">
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
