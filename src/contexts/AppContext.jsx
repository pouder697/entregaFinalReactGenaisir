import React, {createContext, useContext, useState } from "react";
import fetchData from "../utils/fetch";
import Swal from "sweetalert2";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {

const [productos,setProductos] = useState([]);
const [cart, setCart] = useState([]);

function loadData() {
    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
}

function addToCart(id) {
    const auxiliarCart = [...cart]

    const addedProduct = productos.find(producto=> producto.id === id)

    auxiliarCart.push(addedProduct);
    setCart(auxiliarCart);

}

function crearOrden() {

    if (cart.length > 0) {
        const nuevaOrden = {
            nombre: "Lucas Ruiz",
            telefono: 231231231,
            mail: "lucas@coder.com",
            productos: cart,
        };

        nuevaOrden

    } else {
        Swal.fire({
            title: "Error",
            text: "Tu carrito está vacío!",
            icon: "error"
          });
    }
}

    return(
        <AppContext.Provider value={{ productos, cart, addToCart, loadData, crearOrden}}>
            {props.children}
        </AppContext.Provider>
    );
};

