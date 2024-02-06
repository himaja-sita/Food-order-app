import classes from './OrderPlaced.module.css'
import { UisCheckCircle } from '@iconscout/react-unicons-solid';
export default function OrderPlaced(props){
   return <div className={classes}> 
    <div className='order'><span><UisCheckCircle size='100' color='#22ea22'/></span><h2>OrderPlaced</h2></div>
    <div className={classes.action}><button onClick={props.onClose}>Close</button></div>
    </div>
}