import React from 'react';
import { useState } from 'react';
import "../ItemCount/itemcountstyles.css"

const ItemCount = ( { productoSeleccionado } ) => {
    
    const [cantidad,setCantidad] =useState(1) 

    const handdleRestar = () =>{
      cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handdleSumar= () =>{
      cantidad < productoSeleccionado.stock && setCantidad(cantidad + 1);
    }
  return (
    <div className='item-count justify-content-center'>
      <h5>Unidades:</h5>
      <button onClick={handdleRestar}>-</button>
      <p>{cantidad}</p>
      <button onClick={handdleSumar}>+</button>
    </div>
  )
}

export default ItemCount
