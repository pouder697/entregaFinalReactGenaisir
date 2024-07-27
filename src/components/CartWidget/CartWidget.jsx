import React from 'react';
import cart from '../../assets/cart.svg';
import '../Buttons/buttonsstyles.css'

function CartWidget(){
    return(
        <div className="button cart">
             <img  src={cart} alt="cart-widget" />
              0
        </div>
    )
}

export default CartWidget