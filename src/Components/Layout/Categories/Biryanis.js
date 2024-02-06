import { useState,useEffect } from "react"
import MealItem from "../Meals/MealItems";
import Card from "../../UI/Card";
import classes from '../Meals/AvailableMeals.module.css'
export default function Briyanis(){
    const [biryanis,setBiryanis]=useState([]);
const [isloading,setLoading]=useState(false);
useEffect(()=>{
    const fetchbiryanis=async ()=>{
        setLoading(true)
    const response=await fetch('https://food-order-app-4d142-default-rtdb.firebaseio.com/biryanis.json')
    const data=await response.json() 
    let loadedbiryanis=[];
for (const key in data){
loadedbiryanis.push({id:key,name:data[key].name,price:data[key].price,description:data[key].description})
}
setBiryanis(loadedbiryanis);
setLoading(false);
}
    fetchbiryanis()
},[])

if(isloading){
    return <p className={classes.mealsloading}>Loading....</p>
  }
const BiryaniList=biryanis.map(biryani=><MealItem key={biryani.id} {...biryani}></MealItem>)
    return <div className={classes.meals}>
       
        <ul>
    {BiryaniList}
    </ul>
 
    </div>
}