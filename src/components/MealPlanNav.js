import {React, useState} from 'react';
import './css/meal.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import leftArrow from './resources/left-arrow.png';
import rightArrow from './resources/right-arrow.png';

export default function MealPlanNav(props){
    
    let defaultDate = new Date().format('Y-m-d');
    let minDate = "2021-06-01";
    let maxDate = "2050-12-31";

    return(
        <>
        <Row class="meal-plan-nav">
            <Col class="btn-container">
                <div class="arrow-left-btn arrow">
                    <img class="arrow-img" src={leftArrow} alt="left-arrow"/>
                </div>
            </Col>
            <Col class="calendar container" xs="6">
                <div class="calendar">
                    <label class="calendar-lbl" for="day-plan">Pick your day!!!</label>
                </div>
                <br></br>
                <input type="date" id="calendar" name="day-plan" value={defaultDate} min={minDate} max={maxDate} />
            </Col>
            <Col class="btn-container">
                <img class="arrow-img" src={rightArrow} alt="right-arrow"/>
            </Col>
        </Row>
        </>
    )
}