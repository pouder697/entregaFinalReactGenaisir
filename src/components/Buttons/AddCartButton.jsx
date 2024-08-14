import "../Buttons/buttonsstyles.css";
import { useAppContext } from "../../contexts/AppContext";

function AddCartButton(id) {

  const {addToCart} = useAppContext();

  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => addToCart(id)}
    >
      + Agregar al carrito
    </button>
  );
}

export default AddCartButton;
