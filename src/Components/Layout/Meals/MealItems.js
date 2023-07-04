import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
//import {Context} from '../../../store/CartContext';
//import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { cartactions } from '../../../store/Cart-Slice';
export default function MealItem(props){
    //const cartcontext=useContext(Context);
    const dispatch=useDispatch();
function addcartitem(enteredamount){
    console.log('inside mealitem');
//cartcontext.additem({id:props.id,name:props.name,amount:enteredamount,price:props.price});
dispatch(cartactions.additem({id:props.id,name:props.name,amount:enteredamount,price:props.price}));
}

    return <li className={classes.mealitem}>
        <div>
           <h3>{props.name}</h3>
           <p className={classes.description}>{props.description}</p>
           <p className={classes.price}>{`₹${props.price}`}</p>
        </div>
    
        <div>
            <MealItemForm id={props.id} onadd={addcartitem}></MealItemForm>
        
        </div>
        </li>
}