import React from "react";
import {Link} from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import "../Cart/cartstyles.css";
function Cart() {

    const {carrito, precioTotal, vaciarCarrito} = useCartContext();

    return (
        <div className="container">
            <h1>Carrito</h1>
            {
            carrito.map((prod) => (
                <div key={prod.id}>
                <h3>{prod.nombre} x {prod.cantidad}u</h3>
                <p>${prod.precio * prod.cantidad}</p>
                </div>
            ))
            }

            {carrito.length > 0 ?
            <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button className="btn btn-danger" onClick={vaciarCarrito}>
                 x Vaciar Carrito 🗑
            </button>
            <Link to="/checkout"><button className="btn btn-warning">Finalizar compra ✔</button></Link>
            </> :
            <>
            <h2>El carrito se encuentra vacio</h2>
            <Link to="/"><button className="button">⬅ Volver a Productos</button></Link>
            </>
            }
        </div>
    );
}
export default Cart;
