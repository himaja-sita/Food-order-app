import classes from './AddressForm.module.css';

export default function AddressForm(props){
    function placeorder(){
        props.onCloseForm()
        props.showOrder()
        props.emptycart()
    }
    return <form className={classes.formitems}>
    <label>Your Name</label><input type='text' name='name'></input>
    <label>Mobile No</label><input type='number' name='mobile no'></input>
   <label>Address</label> <input type='address' name='address'></input>
   <div className={classes.actions}>
   <button className={classes['button-alt']} onClick={props.onCloseForm}>Cancel</button>
    <button className={classes.button} onClick={placeorder}>Confirm Order</button>
   </div>
    </form>
}
