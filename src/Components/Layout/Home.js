
import Card from '../UI/Card';
import biryani from '../../assets/Chicken-Biryani-img.jpg';
import breakfast from '../../assets/BreakFast.jpg'
import Meals from './Meals/Meals';
import CartContext from '../../store/CartContext';
import classes from './Home.module.css'
import {Link,NavLink} from 'react-router-dom';

 export default function Home(){

  return <CartContext>
        <Meals></Meals>
        <div className={classes.categories}>
        <NavLink to='Biryanis' activeclassName={classes.active} end>
      <div className={classes.categoryitem}>
        <img src={biryani} alt='biryani'></img>
        <h3>Biryanis</h3>
      </div>
      </NavLink>
      <NavLink to='BreakFast' activeclassName={classes.active} end>
      <div className={classes.categoryitem}>
        <img src={breakfast} alt='breakfast'></img>
        <h3>BreakFast</h3>
      </div>
      </NavLink>
      </div>
    </CartContext>
  
}