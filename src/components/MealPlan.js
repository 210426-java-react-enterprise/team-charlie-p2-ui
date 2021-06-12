import {React, useState} from 'react';
import './css/plan.css';




import MealPlanNav from './MealPlanNav';
import MealDayPlan from './MealDayPlan';


export default function MealPlan(props){
    const [userId, setUserId] =  useState("");
    const [mealPlan, setMealPlan] = useState("");

    return(
        <>
            <MealPlanNav/>         
        </>
    )

}