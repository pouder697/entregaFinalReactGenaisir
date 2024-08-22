import React, { useState } from 'react';
import "../Checkout/checkoutstyles.css";
import {useForm} from "react-hook-form";
import { useCartContext } from '../../contexts/CartContext';
import {collection, addDoc} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import Swal from "sweetalert2";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const {carrito,precioTotal, vaciarCarrito} = useCartContext();
    const {register,handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db,"pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) =>{
                setPedidoId(doc.id);
                vaciarCarrito();
            },
            Swal.fire({
                icon: "success",
                text: "Compra realizada con éxito!"
                
              }))
    }

    if(pedidoId){
        return(
            <div className="container">
                <h1>Muchas gracias por su compra!</h1>
                <p>El comprobante de tu compra es: <b> {pedidoId}</b></p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="button enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout;
