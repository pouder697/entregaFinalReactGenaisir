import React, { useState } from "react";
import Loader from "../Loader/Loader";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../contexts/CartContext";

const ItemDetail = ({productoSeleccionado}) => {
 
  const {carrito,addToCart} = useCartContext();
  console.log(carrito);

  const [cantidad,setCantidad] =useState(1);

  const handdleRestar = () =>{
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handdleSumar= () =>{
    cantidad < productoSeleccionado.stock && setCantidad(cantidad + 1);
  }

  return (
    <div className="row justify-content-center">
      {productoSeleccionado ? (
        <>
          <h2 id="bienvenidos">Detalle del producto</h2>

          <div
      style={{ width: "18rem" }}
      className="productCard card col-lg-3 col-md-4 col-sm-12"
    >
      <div className="title">
        <h4 className="card-title">{productoSeleccionado.nombre}</h4>
      </div>
      <img id="product-img" src={productoSeleccionado.imagen} />
      <p className="price underline">
        <b>Precio:</b> ${productoSeleccionado.precio}
      </p>
      <p className="card-text">
        <b>Categoría:</b> {productoSeleccionado.categoria}
      </p>
      <p className="card-text stock">
        <b>Stock:</b> {productoSeleccionado.stock} unidades
      </p>
    </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                ¿Desea agregar este producto al Carrito De Compras?
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </p>
              <ItemCount cantidad={cantidad} 
                         handdleRestar = {handdleRestar}
                         handdleSumar = {handdleSumar} 
                         handdleAgregar={ () => { addToCart(productoSeleccionado,cantidad)}}
                         />

            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemDetail;
