import Cart from '../../assets/cart.svg';
import { useAppContext } from '../../contexts/AppContext';
import '../Buttons/buttonsstyles.css';
import '../CartWidget/cartwidgetstyles.css';


function CartWidget(){

    const { cart, setCartShow, cartShow, listCart } = useAppContext();


    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }


    return(
        <>
        
            <div className='button cart' onClick={() => showCart()}>
            <img  src={Cart} alt="cart-widget" />  <span>{listCart.length} </span>      
            </div>
        </>
    )
}

export default CartWidget;