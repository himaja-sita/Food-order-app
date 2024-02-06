import { useState,useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import ShoppingCart from '../Cart/Shopping Cart';
import Notification from '../UI/Notification';
import { useSelector,useDispatch } from 'react-redux';
//import { sendcartdata,fetchcartdata } from '../../store/cart-actions';

let isinitial=true;
function RootPage(){
    const [showcart,setshowcart]=useState(false);
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.cart.notification);
  
function showcarthandler(){
  setshowcart(true);
}
function closecart(){
setshowcart(false);
}
/*useEffect(()=>{
  dispatch(fetchcartdata())
},[dispatch])

useEffect(()=>{
  if(isinitial){
   isinitial=false;
   return
}
if(cart.changed){
  dispatch(sendcartdata(cart));}
},[cart])*/

    return <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Header onshowcart={showcarthandler}></Header>
    {showcart && <ShoppingCart onClose={closecart}/>}
    
    <main>

    <Outlet></Outlet>

    </main>
    </>
}
export default RootPage;