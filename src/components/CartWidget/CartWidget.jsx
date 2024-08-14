import Cart from '../../assets/cart.svg';
import { useAppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import '../Buttons/buttonsstyles.css';
import '../CartWidget/cartwidgetstyles.css';


function CartWidget(){

    const {cart, crearOrden} =useAppContext();

    const handdleCart = () =>{
        crearOrden();
    }

    return(
        <>
            { cart.length > 0 ?
            <div className="button cart">
            <Link to={"/cart"}>
             <img  src={Cart} alt="cart-widget" />  <p>{cart.length} </p>
            </Link>   
            </div>
            :
            <div className='button cart' onClick={() => handdleCart()}>
            <img  src={Cart} alt="cart-widget" />  <p>{cart.length} </p>      
            </div>
            }
        </>
    )
}

export default CartWidget