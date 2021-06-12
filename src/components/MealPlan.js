import {React, userState} from 'react';
import './css/meal.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MealPlanNav from './MealPlanNav';


export default function MealPlan(props){
    const[userId, setUserId] = userState("");
    const[mealPlan, setMealPlan]=userState("")

    return(
        <>
            <Container className="meal-plan-container" fluid>
                <MealPlanNav/>            
            </Container>
        </>
    )

}