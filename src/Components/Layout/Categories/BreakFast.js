import { useState,useEffect } from "react"
import MealItem from "../Meals/MealItems";
import Card from "../../UI/Card";
import classes from '../Meals/AvailableMeals.module.css'
export default function BreakFast(){
    const [breakfast,setBreakFast]=useState([]);
const [isloading,setLoading]=useState(false);
useEffect(()=>{
    const fetchbreakfast=async ()=>{
        setLoading(true)
    const response=await fetch('https://food-order-app-4d142-default-rtdb.firebaseio.com/breakFast.json')
    const data=await response.json() 
    let loadedbf=[];
for (const key in data){
loadedbf.push({id:key,name:data[key].name,price:data[key].price,description:data[key].description})
}
setBreakFast(loadedbf);
setLoading(false);
}
    fetchbreakfast()
},[])

if(isloading){
    return <p className={classes.mealsloading}>Loading....</p>
  }
const BreakFastList=breakfast.map(breakfast=><MealItem key={breakfast.id} {...breakfast}></MealItem>)
    return <div className={classes.meals}>
        <Card>
        <ul>
    {BreakFastList}
    </ul>
    </Card>
    </div>
}