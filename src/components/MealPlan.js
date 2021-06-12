import {React, useState} from 'react';
import './css/plan.css';




import MealPlanNav from './MealPlanNav';


export default function MealPlan(props){
    const [userId, setUserId] =  useState("");
    const [mealPlan, setMealPlan] = useState("");

    return(
        <>
            <MealPlanNav/>            
        </>
    )

}