import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useAppContext } from '../../contexts/AppContext';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const { id } = useParams();
    const { loadData, productos } = useAppContext();

    useEffect(() => {
        console.log("Llamando a loadData desde ItemListContainer");
        loadData();
      }, []);
    
      useEffect(() => {
        console.log("Productos en ItemDetail:", productos);
        if (productos.length > 0) {
          const findProduct = productos.find((el) => el.id === parseInt(id));
          console.log("Producto encontrado:", findProduct);
          setProductoSeleccionado(findProduct);
        }
      }, [productos, id]);

  return (
    <>
    
    {
    productos.length === 0 ?
                    <main>
                    <Loader />
                    </main>
                    :
        <div>
       {productoSeleccionado && <ItemDetail productoSeleccionado={productoSeleccionado}/>}
       </div>
    }
    </>
  )
}

export default ItemDetailContainer;
