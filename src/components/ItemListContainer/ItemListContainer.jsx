import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemlistcontainerstyles.css';
import { useAppContext } from '../../contexts/AppContext';

const ItemListContainer = () => {

    const {loadData, productos } = useAppContext();

    useEffect(() =>{
        console.log("Llamando a loadData desde ItemListContainer");
        loadData();
    },[])

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <>
                    <h2 style={{padding: "2rem"}}>Bienvenidos a CLOTHING®</h2>
                    <ItemList className="listContainer" productos={productos} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;