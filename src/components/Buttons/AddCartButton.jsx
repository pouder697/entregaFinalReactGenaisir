import React, { useContext } from "react";
import '../Buttons/buttonsstyles.css';
import CartContext from "../../contexts/CartContext";

function AddCartButton({ nombre, precio, id, imagen, categoria }) {

    const [cart,setCart] = useContext(CartContext);

    const addToCart = () =>{
      setCart((currentItems)=>{
        const itemsFound = currentItems.find((item) => item.id === id);
        if(itemsFound){
          return currentItems.map((item)=>{
            if(item.id === id){
              return {...item,quantity: item.quantity +1};
            }else{
              return item;
            }
          })
        }else{
          return [...currentItems, {id, quantity:1 , precio}]
        }
      })
    }


    return(
        <button type="button" className="btn btn-success" onClick={() => addToCart()}>
         + Agregar al carrito
        </button>
    )

}

export default AddCartButton;