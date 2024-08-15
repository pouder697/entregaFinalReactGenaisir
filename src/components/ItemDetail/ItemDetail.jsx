import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useAppContext } from "../../contexts/AppContext";


const ItemDetail = () => { 

  const { id } = useParams();

  const {loadData, productos, viewDetail ,productoSeleccionado} = useAppContext();



  useEffect(() => {
    viewDetail(id)
},[]);

  return (
    <>
    <div>
      <p>Detalle del producto {productoSeleccionado.nombre}</p>
      <Item
        key={productoSeleccionado.id}
        id={productoSeleccionado.id}
        nombre={productoSeleccionado.nombre}
        precio={productoSeleccionado.precio}
        imagen={productoSeleccionado.imagen}
        categoria ={productoSeleccionado.categoria}
      />
    </div>
    </>
  );
};

export default ItemDetail;
