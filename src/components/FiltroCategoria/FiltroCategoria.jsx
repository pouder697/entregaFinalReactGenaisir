import Item from "../Item/Item";
import "../ItemList/itemliststyles.css";
import "../FiltroCategoria/filtrocategoria.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const FiltroCategoria = () => {

  const {categoria} = useParams();

  const {loadData, productos} =useAppContext();

  const [category, setCategory] = useState();


 const filterProductsByCat = (cat) => {
    const filtrado = productos.filter((producto) =>
      producto.categoria.toLowerCase().includes(cat)
    ); 
    return filtrado;
}
useEffect(()=>{loadData();
    filterProductsByCat();
},[category, setCategory])

 
  return (
    
      <div className="row justify-content-between">
        <h1>{categoria}</h1>
      {
          filterProductsByCat(categoria).map((producto) => (
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
