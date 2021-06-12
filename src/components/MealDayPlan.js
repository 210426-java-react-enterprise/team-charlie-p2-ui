import {React, useState} from 'react';
import './css/plan.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import leftArrow from './resources/left-arrow.png';
import rightArrow from './resources/right-arrow.png';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

export default function MealDayPlay(props){


    return(
        <>
            <div class="dayPlanDetails">
                <Row class="mealTime">

                </Row>
                <Row class="saveBtnContainer">
                    
                </Row>
            </div>
        </>
    )
}
