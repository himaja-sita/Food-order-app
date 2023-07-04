import MealItem from './MealItems';
import classes from './AvailableMeals.module.css';
import Card from '../../UI/Card';
import { useState,useEffect } from 'react';

 const AvailableMeals=()=>{
  const [meals,setMeals]=useState([]);
const [isloading,setLoading]=useState(false);
useEffect(()=>{
  const  fetchmeals=async()=>{
    setLoading(true);
const response=await fetch('https://food-order-app-4d142-default-rtdb.firebaseio.com/meals.json');
const data=await response.json();
let loadedmeals=[];
for (const key in data){
loadedmeals.push({id:key,name:data[key].name,price:data[key].price,description:data[key].description})
}
setMeals(loadedmeals);
setLoading(false);
  }
  fetchmeals();
},[])

if(isloading){
  return <p className={classes.mealsloading}>Loading....</p>
}
const MealsList=meals.map(meal=><MealItem key={meal.id} {...meal}></MealItem>)
    return <div className={classes.meals}>
        <Card>
        <ul>
    {MealsList}
    </ul>
    </Card>
    </div>
}
export default AvailableMeals