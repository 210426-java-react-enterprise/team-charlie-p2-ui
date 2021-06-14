import {React, useState} from 'react';
import styles from './css/plan.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';

export default function MealPlanDay(props){

    const[mealTimeRows, setMealTimeRows] = useState([])
    const [errorPresent, setErrorPresent] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    
    console.log(props.currentUser);


    function addMealTime(){
        console.log("addMealTime was invoked!!!")
        console.log(props.count);

        const recipeSelectName = "recipeSelect"
        let recipeSelectId = recipeSelectName.concat(props.count);
        let mealTimeLbl;
       
        switch (props.count) {
            case 0:
                mealTimeLbl = "Breakfast";
                break;
            case 1:
                mealTimeLbl = "Lunch";
                break;
            case 2:
                mealTimeLbl = "Dinner";
                break;               
            default:
                mealTimeLbl = "Snack";
                break;
        }
        
    
        const row =(
        
            <Row key={props.count} className={styles.mealTime}>
            <Col>
                <label className={styles.mealTimeLbl} htmlFor={recipeSelectId}>{mealTimeLbl}</label>
            </Col> 
            <Col>
                <select className={styles.recipeSlct} name="recipe" id={recipeSelectId} ref={props.testRef}  onChange={props.handleOtionChange()}>
                    <option value="">--Please choose and option</option>
                    {props.currentUser.favorites.map((elem, index) =>  <option key ={index} value={elem.id}>{elem.label}</option>)}
                </select>
            </Col> 
        </Row>
        )
        //setCount(count => count + 1);
        //props.setCount(props.count => count + 1);
        console.log(props.count);
        props.setCount(props.count + 1)
        console.log(props.count);

        setMealTimeRows(mealTimeRows => [...mealTimeRows, row])
    }


    function removeMealTime(){
            props.setCount(() => props.count - 1); 
            const newMealTimeRow = mealTimeRows.filter(Row => Row.key != props.count);
            setMealTimeRows(newMealTimeRow);
            console.log(props.count);
    }

    return(
        <>
            <div className={styles.dayPlanDetails}>
                <div id="meal-row-format">
                    {   
                        mealTimeRows
                    }
                </div>
                <Row className={styles.saveBtnContainer}>
                    <Col>
                        <Button id="add-time-button" variant={styles.light} className= {styles.addBtn} onClick={() => addMealTime()} >Add Time</Button>
                    </Col>
                  
                    <Col>
                        <Button id="save-button" variant={styles.light} className= {styles.saveBtn} onClick={props.saveMealTime}>Save</Button>
                    </Col>
                </Row>
            </div>
        </>
    )

}