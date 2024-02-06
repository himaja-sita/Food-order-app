import meals from '../../assets/meal img.jpg';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import { NavLink } from 'react-router-dom';
import GoogleSignIn from '../UI/GoogleSignIn';

export default function Header(props){

    return <>
    <header className={classes.header}>
    <GoogleSignIn></GoogleSignIn>
        <h2>ReactMeals</h2>
        <NavLink to='/' activeclassName={classes.active} end>Home</NavLink>
        <HeaderCart onshowcart={props.onshowcart}/>
    
    </header>
    <div className={classes['main-image']}>
    <img src={meals} alt='indian meals img'></img>
    </div>
    </>
}