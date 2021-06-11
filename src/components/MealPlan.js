import {React, useState} from 'react';
import './components/meal-plan.css';
import { Container, Row, Col } from 'reactstrap';

export default function MealPlan(props){
    const[userId, setUserId] = userState("user_id");
    const[mealPlan, setMealPlan]=userState("mealTimeList")

    return(
        <>
            <Container className="meal-plan-container" fluid={true}>

            </Container>
        </>
    )

}