import React, {useContext} from 'react';
import Cart from '../../assets/cart.svg';
import '../Buttons/buttonsstyles.css'
import CartContext from '../../contexts/CartContext';

function CartWidget(){

    const [cart,setCart] =useContext(CartContext);

    const cantidad = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0 );


    return(
        <div className="button cart">
             <img  src={Cart} alt="cart-widget" />
              {cantidad}
        </div>
    )
}

export default CartWidget