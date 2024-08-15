import React, {createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQMl_azaTtNBVZ73IrbYuC3NRe6ZWKRRI",
    authDomain: "entrega-final-reactjs-genaisir.firebaseapp.com",
    projectId: "entrega-final-reactjs-genaisir",
    storageBucket: "entrega-final-reactjs-genaisir.appspot.com",
    messagingSenderId: "584475486570",
    appId: "1:584475486570:web:218f0c5b869873faffdd13"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsRef = collection(db, "productos");

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {

const [productos,setProductos] = useState([]);
const [cart, setCart] = useState([]);
const [productoSeleccionado, setProductoSeleccionado] = useState({});

function loadData() {
    console.log("CARGANDO DATOS")

    getDocs(productsRef).then(snapshot =>{
        let arrayDeProductos = snapshot.docs.map(producto => producto.data());
        setProductos(arrayDeProductos);
        console.log(arrayDeProductos);
    })
}
    /*
    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
}*/

function viewDetail(id){
const findProduct = productos.find(el => el.id === parseInt(id));
setProductoSeleccionado(findProduct);
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
        <AppContext.Provider value={{ productos, cart, addToCart, loadData, crearOrden,viewDetail, productoSeleccionado}}>
            {props.children}
        </AppContext.Provider>
    );
};

