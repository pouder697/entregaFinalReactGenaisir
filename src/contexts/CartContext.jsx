import React, {createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartContextProvider = ({children}) => {

  const [carrito, setCarrito] = useState(carritoInicial)

  const addToCart = (productoSeleccionado,cantidad) =>{
    const productoAgregado = {...productoSeleccionado, cantidad};

    const nuevoCarrito = [...carrito];
    const seEncuentraEnCart = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);

    console.log("hola")
    if(seEncuentraEnCart){
      seEncuentraEnCart.cantidad += cantidad;
    }else{
      nuevoCarrito.push(productoAgregado)
    }
     Swal.fire({
      icon: "success",
      text:`Agregaste ${productoAgregado.cantidad} ${productoAgregado.nombre} al carrito`
      
    })
    setCarrito(nuevoCarrito)
  }
  
  const deleteFromCart = (productoSeleccionado, cantidad) => {
    const nuevoCarrito = [...carrito];
    const productoEnCart = nuevoCarrito.find((producto) => producto.id === productoSeleccionado.id);

    if (productoEnCart) {
      productoEnCart.cantidad -= cantidad;

      if (productoEnCart.cantidad <= 0) {
        const index = nuevoCarrito.indexOf(productoEnCart);
        nuevoCarrito.splice(index, 1);
      }

      Swal.fire({
        icon: "info",
        text: `Eliminaste ${cantidad} ${productoEnCart.nombre} del carrito`
      });

      setCarrito(nuevoCarrito);
    } else {
      Swal.fire({
        icon: "error",
        text: `El producto no se encuentra en el carrito`
      });
    }
  };


const cantidadEnCarrito = () => {
  return carrito.reduce((acc,prod) => acc + prod.cantidad, 0);
}

const precioTotal = () =>{
  return carrito.reduce((acc, prod)=>acc + prod.precio * prod.cantidad , 0);
}

const vaciarCarrito =() =>{
  setCarrito([]);
}

  useEffect(() => {
    localStorage.setItem("carrito",JSON.stringify(carrito))
  }, [carrito])
    return(
        <CartContext.Provider value={{ carrito, vaciarCarrito, addToCart,deleteFromCart,cantidadEnCarrito, precioTotal}}>
            {children}
        </CartContext.Provider>
    );
};

