import {React, useState} from 'react';
import './css/plan.css';

import MealDayPlan from './MealDayPlan';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import leftArrow from './resources/left-arrow.png';
import rightArrow from './resources/right-arrow.png';

export default function MealPlanNav(props){
    
    //let defaultDate = new Date().format('Y-m-d');
    let minDate = "2021-06-01";
    let maxDate = "2050-12-31";

    return(
        <>
        <Container fluid class="mealPlanContainer"  style={{ marginTop: `${1}rem` }}>
            <Row class="mealPlanNav">
                <Col  md={4} class="btnContainer">
                    <div class="arrowLeftBtnstyles arrow"  style={{ marginTop: `${1}rem`}}>
                        <img class="arrowImg" src={leftArrow} alt="leftArrow" style={{marginLeft:`${70}%`}}/>
                    </div>
                </Col>
                <Col sm={8} md={4} class="calendarContainer" style={{textAlign:`center`}}>
                    <div class="dayPlanDetails" style={{fontSize:`${1.25}rem`}}>
                        <label for="dayPlan">Pick your day!!!</label>
                    </div>
                    <input type="date" id="calendar" name="dayPlan" value="2021-06-12" min={minDate} max={maxDate} />
                </Col>
                <Col md={4} class="btnContainer">
                    <div class="arrowRightBtnstyles arrow" style={{ marginTop: `${1}rem` }}>
                        <img class="arrowImg" src={rightArrow} alt="rightArrow" style={{marginLeft:`${20}%`}}/>
                    </div>    
                </Col> 
            </Row>
                <MealDayPlan/>      
        </Container>
        </>
    )
}