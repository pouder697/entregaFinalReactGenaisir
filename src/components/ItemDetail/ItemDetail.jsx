import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useAppContext } from "../../contexts/AppContext";
import Loader from "../Loader/Loader";
import AddCartButton from "../Buttons/AddCartButton"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = () => {
  const { id } = useParams();
  const {loadData, productos } = useAppContext();
  const [productoSeleccionado, setProductoSeleccionado] = useState();


    useEffect(() =>{
        console.log("Llamando a loadData desde ItemListContainer");
        loadData();
    },[])

  useEffect(() => {
    console.log("Productos en ItemDetail:", productos);
    if (productos.length > 0) {
      const findProduct = productos.find(el => el.id === parseInt(id));
      console.log("Producto encontrado:", findProduct);
      setProductoSeleccionado(findProduct);
    }
  }, [productos, id]);

  return (
    <div className="row justify-content-center">
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
          <div className="card">
  <div className="card-body">
    <h5 className="card-title">¿Desea agregar este producto al Carrito De Compras?</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
    <ItemCount productoSeleccionado ={productoSeleccionado}/>
    <AddCartButton />
    
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