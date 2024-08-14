import React from "react";
import { useAppContext } from "../../contexts/AppContext";
function Cart() {
  const { carrito } = useAppContext();
    return (
        <div>Este es mi carrito
            <button onClick={() => console.log(carrito)}>
                Mostrar carrito
            </button>
        </div>
    );
}
export default Cart;
