import React from 'react'
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemlistcontainerstyles.css';

const ItemListContainer = ({ productos }) => {

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