import "../Buttons/buttonsstyles.css";
import { useAppContext } from "../../contexts/AppContext";

function AddCartButton(id) {

  const {addProduct} = useAppContext();

  return (
    <div className="addButton justify-content-center">
    <button
      type="button"
      className="btn btn-success "
      onClick={() => addProduct(id)}
    >
      + Agregar al carrito
    </button>
    </div>
  );
}

export default AddCartButton;
