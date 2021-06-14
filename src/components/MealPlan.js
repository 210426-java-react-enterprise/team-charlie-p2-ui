import {React, useState} from 'react';
import './css/plan.css';


import MealPlanNav from './MealPlanNav';


export default function MealPlan(props){

    return(
        <>
            <MealPlanNav setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />         
        </>
    )

}