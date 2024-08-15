import React, {createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../Firebase/Firebase";
import {collection, getDocs} from "firebase/firestore";


const productsRef = collection(db, "productos");

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {

const [productos,setProductos] = useState([]);
const [cart, setCart] = useState([]);

function loadData() {

    getDocs(productsRef).then(snapshot =>{
        let arrayDeProductos = snapshot.docs.map(producto => producto.data());
        console.log("Productos cargados:", arrayDeProductos);
        setProductos(arrayDeProductos);
        console.log(arrayDeProductos);
    })
}
    /*
    Manera antigua de obtener datos del mock

    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
}*/


function addToCart(id) {
    const auxiliarCart = [...cart]

    const addedProduct = productos.find(producto=> producto.id === id)

    auxiliarCart.push(addedProduct);
    setCart(auxiliarCart);

}

function crearOrden() {

    if (cart.length > 0) {
        const nuevaOrden = {
            nombre: "Andrés Genaisir",
            telefono: 231231231,
            mail: "andres@gmail.com",
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

