import {React, useState} from 'react';
import './css/plan.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';

export default function MealDayPlay(props){

    const [dayPlanList, setDayPlanList] = useState([]);
    
    let mealTimesArray;


    function renderSelectElement (mealTimesArray) {
            console.log("addSelect invoke");
            if (mealTimesArray != undefined){
                mealTimesArray.push(
                    <Row class="mealTime">
                        <Col>
                            <label class="mealTimeLbl" for="recipeSelect1">Breakfast</label>
                        </Col> 
                        <Col>
                            <select class="recipeSlct" name="recipe" id="recipeSelect1">
                                <option value="">--Please choose and option</option>
                                <option value="RecipeFav0">Recipe 0</option>
                            </select>
                        </Col> 
                    </Row>
                );
            }else{
                mealTimesArray = new Array(
                    <Row class="mealTime">
                        <Col>
                            <label class="mealTimeLbl" for="recipeSelect1">Breakfast</label>
                        </Col> 
                        <Col>
                            <select class="recipeSlct" name="recipe" id="recipeSelect1">
                                <option value="">--Please choose and option</option>
                                <option value="RecipeFav0">Recipe 0</option>
                            </select>
                        </Col> 
                    </Row>
                );
            }
            

    }

    /*
    const updateDayPlanList = () =>{
        let newArr = [...dayPlanList];
        setDayPlanList.dayPlanList.push("test");  
        setDayPlanList(newArr);
    }
    */

    

    return(
        <>
            <div class="dayPlanDetails">
                {(mealTimesArray == undefined)
                ? 
                <Row>
                    <Col>
                        <h3 style={{marginLeft : `${40}%`}}>Start planning your meals!!!</h3>
                    </Col>
                </Row> 
                :  
                renderSelectElement(mealTimesArray)
                } 
                <Row class="saveBtnContainer" style={{ marginTop:`${2}%` }}>
                    <Col>
                        <Button variant="light" onClick={renderSelectElement(mealTimesArray)} style={{ marginLeft: `${50}%`}}>Add Meal Time</Button>
                    </Col>
                    <Col>
                        <Button variant="light">Save</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
