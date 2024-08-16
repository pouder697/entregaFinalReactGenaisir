import "../Buttons/buttonsstyles.css";
import { useAppContext } from "../../contexts/AppContext";

function AddCartButton(id) {

  const {addProduct} = useAppContext();

  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => addProduct(id)}
    >
      + Agregar al carrito
    </button>
  );
}

export default AddCartButton;
