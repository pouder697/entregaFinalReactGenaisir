import React from "react";
import Item from "../Item/Item";
import "../ItemList/itemliststyles.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FiltroCategoria = ({ productos }) => {

  const {categoria} =useParams();

  const [category, setCategory] = useState("");

  const filterProductsByCat = (productos, categoria) => {
    return productos.filter((producto) =>
      producto.categoria.toLowerCase().includes(categoria)
    );
  };

 setCategory(filterProductsByCat);
 
  return (
    
      <div className="row justify-content-between">
      {
          filterProductsByCat(productos, categoria).map((producto) => (
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
  );
};

export default FiltroCategoria;
