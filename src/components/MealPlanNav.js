import {React, useState} from 'react';
import './css/plan.css';

import MealPlanDay from './MealPlanDay';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import leftArrow from './resources/left-arrow.png';
import rightArrow from './resources/right-arrow.png';

export default function MealPlanNav(props){
    const[date, setDate] = useState();

    function changeDate(e){
        console.log("change date was invoked!!!")
        setDate(date => e.target.value);
    }

    //Its not reading the date new value
    function nextDay() {
        console.log("change date was invoked!!!")
        let supportDate = new Date(date);    
        supportDate.setDate(supportDate.getDate + 1);
        setDate(supportDate);
    }

    //Its not reading the date new value
    function previousDay() {
        console.log("change date was invoked!!!")
        let supportDate = new Date(date);    
        supportDate.setDate(supportDate.getDate - 1);
        setDate(supportDate);
    }

    async function savePlan(){
        let saveResp = await fetch('http://localhost:5000/save/plan')
    }


    
    //let defaultDate = new Date().format('Y-m-d');
    let minDate = "2021-06-01";
    let maxDate = "2050-12-31";

    return(
        <>
        <Container fluid class="mealPlanContainer"  style={{ marginTop: `${1}rem` }}>
            <Row class="mealPlanNav">
                <Col  md={4} class="btnContainer">
                    <div class="arrowLeftBtnstyles arrow"  style={{ marginTop: `${1}rem`}}>
                        <img class="arrowImg" src={leftArrow} alt="leftArrow" style={{marginLeft:`${70}%`}} onClick={previousDay}/>
                    </div>
                </Col>
                <Col sm={8} md={4} class="calendarContainer" style={{textAlign:`center`}}>
                    <div class="dayPlanDetails" style={{fontSize:`${1.25}rem`}}>
                        <label for="dayPlan">Pick your day!!!</label>
                    </div>
                    <input type="date" data-date="" data-date-format="YYYY-MM-DD" id="calendar" name="dayPlan" value={date} min={minDate} max={maxDate} onChange={changeDate} />
                </Col>
                <Col md={4} class="btnContainer">
                    <div class="arrowRightBtnstyles arrow" style={{ marginTop: `${1}rem` }}>
                        <img class="arrowImg" src={rightArrow} alt="rightArrow" style={{marginLeft:`${20}%`}} onClick={nextDay}/>
                    </div>    
                </Col> 
            </Row>
                <MealPlanDay setCurrentUser={props.setCurrentUser} currentUser = {props.currentUser}/>      
        </Container>
        </>
    )
}