import React, {createContext, useContext, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection, getDocs} from "firebase/firestore";


const productsRef = collection(db, "productos");

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {

const [productos,setProductos] = useState([]);

function loadData() {

    getDocs(productsRef).then(snapshot =>{
        let arrayDeProductos = snapshot.docs.map(producto => producto.data());
        console.log("Productos cargados:", arrayDeProductos);
        setProductos(arrayDeProductos);
        console.log(arrayDeProductos);
    })
}
    /*
    Manera antigua de obtener datos del mock

    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
}*/







    return(
        <AppContext.Provider value={{ productos, loadData }}>
            {props.children}
        </AppContext.Provider>
    );
};

