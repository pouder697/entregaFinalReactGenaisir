import Cart from '../../assets/cart.svg';
import {Link} from "react-router-dom"
import '../Buttons/buttonsstyles.css';
import '../CartWidget/cartwidgetstyles.css';
import { useCartContext } from '../../contexts/CartContext';


function CartWidget(){

  const {cantidadEnCarrito} = useCartContext();


    return(
        <>
        <Link to="/cart">
            <button className='button cart'>
            <img src={Cart} alt="cart-widget" />  <span> {cantidadEnCarrito()}</span>      
            </button>
        </Link>
        </>
    )
}

export default CartWidget;