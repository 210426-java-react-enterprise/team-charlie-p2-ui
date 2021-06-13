import {React, useState} from 'react';
import './css/plan.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';

export default function MealPlanDay(props){

    const[mealTimeRows, setMealTimeRows] = useState([])
    const[count, setCount] = useState(0);
    

    function addMealTime(){
        const recipeSelectName = "recipeSelect"
        let recipeSelectId = recipeSelectName.concat(count);
        const optionValueName = "RecipeFav";
        let optionValue = optionValueName.concat(count);
        // if(count < 0){
        //     let dif= 0 - count;
        //     setCount(count => count + dif);
        // }
        const row =(
            <Row key={count} class="mealTime">
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
        setCount(count => count + 1);
        console.log(count);
        setMealTimeRows(mealTimeRows => [...mealTimeRows, row])
    }

    

    function removeMealTime(){
            const newMealTimeRow = mealTimeRows.filter(Row => Row.key != count);
            setMealTimeRows(newMealTimeRow);
            setCount(() => count - 1); 
            console.log(count);
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
                        <Button className= "btn" variant="light" onClick={() => removeMealTime()} style={{ marginLeft: `${20}%`}}>Remove Meal Time</Button>
                    </Col>
                    <Col>
                        <Button className= "btn" variant="light">Save</Button>
                    </Col>
                </Row>
            </div>
        </>
    )

}