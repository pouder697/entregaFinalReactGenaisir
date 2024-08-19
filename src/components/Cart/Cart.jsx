import React from "react";
function Cart() {

    return (
        <div>Este es mi carrito
            <button onClick={() => console.log("carrito")}>
                Mostrar carrito
            </button>
        </div>
    );
}
export default Cart;
