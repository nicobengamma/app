import { Link } from "react-router-dom";

const Finalizar = ({ lleno }) => {
  console.log(lleno);
  return (
    <div>
      <Link to="/CardCredit">
        <button type="button" class="btn btn-success">
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
};

export default Finalizar;
