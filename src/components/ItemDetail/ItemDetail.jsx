import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useAppContext } from "../../contexts/AppContext";

const ItemDetail = () => {
  const { id } = useParams();
  const { productos } = useAppContext();
  const [productoSeleccionado, setProductoSeleccionado] = useState();

  useEffect(() => {
    console.log("Productos en ItemDetail:", productos);
    if (productos.length > 0) {
      const findProduct = productos.find(el => el.id === parseInt(id));
      console.log("Producto encontrado:", findProduct);
      setProductoSeleccionado(findProduct);
    }
  }, [productos, id]);

  return (
    <div>
      {productoSeleccionado ? (
        <>
          <h2>Detalle del producto</h2>
          <Item
            key={productoSeleccionado.id}
            id={productoSeleccionado.id}
            nombre={productoSeleccionado.nombre}
            precio={productoSeleccionado.precio}
            imagen={productoSeleccionado.imagen}
            categoria={productoSeleccionado.categoria}
            stock={productoSeleccionado.stock}
          />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;