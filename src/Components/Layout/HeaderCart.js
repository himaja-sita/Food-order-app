import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';
import {useSelector} from 'react-redux';
import { useContext,useState,useEffect } from 'react';
//import {Context} from '../../store/CartContext';

export default function HeaderCart(props){
    const cartitems=useSelector(state=>state.cart.items);
//const CartContext=useContext(Context);
const totalitems=cartitems.reduce((currval,item)=>{
return currval+item.amount
},0)
//console.log(`insideHcart${totalitems}`)
const [btnhighlighted,setbtnhighlight]=useState(false);
useEffect(()=>{
  
    setbtnhighlight(true);
    const timer=setTimeout(()=>{
       setbtnhighlight(false);
   },300)
    return ()=>{
        clearTimeout(timer);
    }
},[cartitems]);
const badgeclass=`${classes.badge}${btnhighlighted?classes.bump:''}`

    return <button className={classes.button} onClick={props.onshowcart}>
        <span className={classes.icon}>
<CartIcon></CartIcon>
        </span>
        <span>
            Your Cart
        </span>
        <span className={badgeclass}>
            {totalitems}
        </span>
    </button>
}