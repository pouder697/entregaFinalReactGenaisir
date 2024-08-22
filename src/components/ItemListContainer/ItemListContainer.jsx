import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemlistcontainerstyles.css';
import { useAppContext } from '../../contexts/AppContext';
import Loader from '../Loader/Loader';

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
                    <main>
                    <Loader />
                    </main>
                    :
                    <>
                    <main>
                    <h2 id="bienvenidos" style={{padding: "2rem"}}>Bienvenidos a CLOTHING®</h2>
                    <ItemList className="listContainer" productos={productos} />
                    </main>
                    </>
            }
        </>
    );
};

export default ItemListContainer;