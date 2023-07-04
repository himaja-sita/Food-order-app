import meals from '../../assets/meal img.jpg';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
export default function Header(props){
    return <>
    <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCart onshowcart={props.onshowcart}/>
    </header>
    <div className={classes['main-image']}>
    <img src={meals} alt='indian meals img'></img>
    </div>
    </>
}