import Cart from '../../assets/cart.svg';

import '../Buttons/buttonsstyles.css';
import '../CartWidget/cartwidgetstyles.css';


function CartWidget(){

  


    return(
        <>
        
            <div className='button cart'>
            <img  src={Cart} alt="cart-widget" />  <span> </span>      
            </div>
        </>
    )
}

export default CartWidget;