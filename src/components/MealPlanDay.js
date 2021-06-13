import {React, useState} from 'react';
import './css/plan.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';
import MealPlan from './MealPlan';

export default function MealPlanDay(props){

    const[mealTimeRows, setMealTimeRows] = useState([])
    const[count, setCount] = useState(0);
    const[errorMessage, setErrorMessage]= useState({});
    
    // props.setCurrentUser(async function handleSearch(){
    //     console.log("Searching for recipes...");

    //     let res = await fetch(`http://localhost:5000/recipe/id/${count}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': props.currentToken
    //         }
    //     })
        
    //         if(res.status != 200){
    //             let err = await res.json();
    //             setErrorMessage(err);
    //             setErrorPresent(true);
    
    //         }else{
    //             console.log(res.status);
    //             let json = await res.json();
    
    //             props.setCurrentUser(json);
    
    //             // console.log(json);
    //             setRecipes(json);
    //             setSearchPage('search-select');
                
    //         }
    //     })    
        


    function addMealTime(){
        const recipeSelectName = "recipeSelect"
        let recipeSelectId = recipeSelectName.concat(count);
        const optionValueName = "RecipeFav";
        let optionValue = optionValueName.concat(count);
        // if(count < 0){
        //     let dif= 0 - count;
        //     setCount(count => count + dif);
        // }

        //<option value={optionValue}>{props.mealPlan.favorites[count].label}</option>

        const row =(
            <Row key={count} class="mealTime">
            <Col>
                <label class="mealTimeLbl" for={recipeSelectId}>Meal Time # {count}</label>
            </Col> 
            <Col>
                <select class="recipeSlct" name="recipe" id={recipeSelectId}>
                    <option value="">--Please choose and option</option>
                    <option value={optionValue}>Meal Time # {count}</option>
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