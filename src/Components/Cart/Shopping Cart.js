//import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './ShoppingCart.module.css';
//import {Context} from '../../store/CartContext';
import CartItem from './CartItem';
import { useDispatch,useSelector } from 'react-redux';
import { cartactions } from '../../store/Cart-Slice';

const ShoppingCart=(props)=>{
    const dispatch=useDispatch();
    const cartitems=useSelector(state=>state.cart.items);
    const totalamount=useSelector(state=>state.cart.totalamount);
   // const cartcontext=useContext(Context);
    function removehandler(id){
//cartcontext.remove(id);
dispatch(cartactions.removeitem(id));
    }
    function addhandler(item){
//cartcontext.additem(item);
dispatch(cartactions.additem(item));
    }
   
const cartitemslist=<ul className={classes['cart-items']}>{cartitems.map(item=>{
    return <> {console.log(`insideScart${item}`)}
<CartItem key={item.id}{...item} onRemove={removehandler.bind(null,item.id)} onAdd={addhandler.bind(null,item)}></CartItem></>
})}</ul>

    return <Modal onClose={props.onClose}>
        {cartitemslist}
    <div className={classes.total}>
        <span>Total Amount</span>
    <span>{totalamount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}onClick={props.onclose}>Order</button>
    </div>
    </Modal>
}
export default ShoppingCart