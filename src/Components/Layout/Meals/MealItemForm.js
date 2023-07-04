import classes from './MealItemForm.module.css';
import { useRef,useState } from 'react';
export default function MealItemForm(props){
    const amountref=useRef();
    const [validamount,setvalidamount]=useState(true);
    function submithandler(event){
event.preventDefault();
const enteredamount=amountref.current.value;
if(enteredamount<1||enteredamount>5){
    setvalidamount(false);
    return;
}
console.log('inside form submit');
props.onadd(+enteredamount);
    }
    return <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.formitems}>
         <label htmlFor='amount'>Amount</label>
            <input ref={amountref} id={props.id} type='number' min='1' max='5' step='1' defaultValue='1'></input>
        </div>
            <button>+Add</button>
            {!validamount && <p>Please enter valid amount!!</p>}
    </form>
}