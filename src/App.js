
import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Layout/Meals/Meals';
import ShoppingCart from './Components/Cart/Shopping Cart';
import CartContext from './store/CartContext';
import Notification from './Components/UI/Notification';
import { useSelector,useDispatch } from 'react-redux';
import { sendcartdata,fetchcartdata } from './store/cart-actions';

let isinitial=true;
function App() {
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
useEffect(()=>{
  dispatch(fetchcartdata())
},[dispatch])

useEffect(()=>{
  if(isinitial){
    isinitial=false;
    return
  }
  if(cart.changed){
  dispatch(sendcartdata(cart));}
},[cart,dispatch])

  return (<CartContext>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Header onshowcart={showcarthandler}></Header>
    {showcart && <ShoppingCart onClose={closecart}/>}
    <main>
      <Meals></Meals>
    </main>
    </CartContext>
  );
}

export default App;
