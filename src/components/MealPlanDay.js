import {React, useState} from 'react';
import './css/plan.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';

export default function MealPlanDay(props){

    const[mealTimeRows, setMealTimeRows] = useState([])

    let count=0;

    function addMealTime(){
        count++;
        console.log(count);
        const recipeSelectName = "recipeSelect"
        let recipeSelectId = recipeSelectName.concat(count);
        const optionValueName = "RecipeFav";
        let optionValue = optionValueName.concat(count);

        const row =(
            <Row class="mealTime">
            <Col>
                <label class="mealTimeLbl" for={recipeSelectId}>Meal Time # {count}</label>
            </Col> 
            <Col>
                <select class="recipeSlct" name="recipe" id={recipeSelectId}>
                    <option value="">--Please choose and option</option>
                    <option value={optionValue}>Recipe {count}</option>
                </select>
            </Col> 
        </Row>
        )
        
        setMealTimeRows(mealTimeRows => [...mealTimeRows, row])
    }
    
    return(
        <>
            <div class="dayPlanDetails">
                {   
                    mealTimeRows
                }
                <Row class="saveBtnContainer" style={{ marginTop:`${2}%` }}>
                    <Col>
                        <Button variant="light" onClick={() => addMealTime()} style={{ marginLeft: `${50}%`}}>Add Meal Time</Button>
                    </Col>
                    <Col>
                        <Button variant="light">Save</Button>
                    </Col>
                </Row>
            </div>
        </>
    )

}