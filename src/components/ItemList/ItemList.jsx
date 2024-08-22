import React from "react";
import Item from "../Item/Item";
import "../ItemList/itemliststyles.css";
import { useState } from "react";

const ItemList = ({ productos }) => {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState("");

  const filterProducts = (productos) => {
    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
    );
  };

  return (
    <div>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="🔍︎ Buscar producto..."
        value={terminoDeBusqueda}
        onChange={(e) => setTerminoDeBusqueda(e.target.value)}
      />
      <div className="row justify-content-between">
      {
          filterProducts(productos).map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              categoria={producto.categoria}
              stock={producto.stock}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ItemList;
