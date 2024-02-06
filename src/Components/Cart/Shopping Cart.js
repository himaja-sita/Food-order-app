//import { useContext } from 'react';
import Modal from '../UI/Modal';
import { useState } from 'react';
import OrderPlaced from './OrderPlaced';
import CartList from './CartList';

const ShoppingCart=(props)=>{
    const [isOrder,setIsOrder]=useState(false);
    
    function showOrder(){
        setIsOrder(true)
    }

    return <Modal onClose={props.onClose}>
      {!isOrder && <CartList showOrder={showOrder} onClose={props.onClose}></CartList>}

    {isOrder && <OrderPlaced onClose={props.onClose}></OrderPlaced>}
    </Modal>
}
export default ShoppingCart
