import React from 'react';
import "../ItemCount/itemcountstyles.css";


const ItemCount = ( { cantidad,handdleSumar,handdleRestar, handdleAgregar, handdleEliminar } ) => {
    

  return (
    <>
    <div className='item-count justify-content-center'>
      <h5>Unidades:</h5>
      <button onClick={handdleRestar}>-</button>
      <p>{cantidad}</p>
      <button onClick={handdleSumar}>+</button>
    </div>
    <div className="addButton justify-content-center">
    <button
      type="button"
      className="btn btn-success "
      onClick={handdleAgregar}
    >
      + Agregar al carrito
    </button>
    <button
      type='button'
      className='btn btn-danger'
      onClick={handdleEliminar}
    >
      -Eliminar producto
    </button>
    </div>
    </>
  )
}

export default ItemCount
