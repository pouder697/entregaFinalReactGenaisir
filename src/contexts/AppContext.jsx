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
const [listCart, setListCart] = useState([]);
const [cartShow, setCartShow] = useState("none")

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

const addProduct = (id) => {
    //producto a añadir al carrito
    const producAdd = productos.find(product => product.id === id) 
    const productsToMaintain = listCart.filter(product => product.id !== id)

    let add = true;
    for(let product of listCart) {  
        if(product.id === id){
            let quantity = product.quantity;

            if(quantity < producAdd.stock){
                const newQuantity = {...product, quantity: quantity + 1}
                setListCart( [...productsToMaintain, newQuantity] )
            }

            add = false;
            break
        }  
    }

    add && setListCart( [...productsToMaintain, {...producAdd, quantity: 1}] )
}

const clearCart = () => {
    setListCart([]);
}

const removeFromCart = (id) => {
    const updateList = listCart.filter(product => product.id !== id)
    setListCart(updateList);
}


/*function crearOrden() {

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
}*/


    return(
        <AppContext.Provider value={{ productos, cart,clearCart,removeFromCart, addProduct, loadData, listCart, setListCart, cartShow, setCartShow}}>
            {props.children}
        </AppContext.Provider>
    );
};

