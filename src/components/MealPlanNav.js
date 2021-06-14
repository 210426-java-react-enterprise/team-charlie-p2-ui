import {React, useState} from 'react';
import styles from './css/plan.module.css';

import MealPlanDay from './MealPlanDay';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import leftArrow from './resources/left-arrow.png';
import rightArrow from './resources/right-arrow.png';

export default function MealPlanNav(props){
    const[date, setDate] = useState();
    const[count, setCount] = useState(0);
    const[dayPlan, setDayPlan]= useState([]);
    const[mealPlan, setMealPlan]= useState({});
    
    console.log(props.currentUser);

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


    function handleOtionChange(e){    
    
    
        console.log("handleOtionChange was invoked!!!");

        let dayPlanSup={
            date:"",
            time:"",
            recipe:{}
        }
        
        dayPlanSup.date = date;
        dayPlanSup.recipe = props.currentUser.favorites[e.target.value];
        dayPlanSup.time = e.target.getAttribute("data-label");
        // console.log(e);
        // switch (e) {
        //     case 0:
        //         dayPlanSup.time = "Breakfast";
        //         break;
        //     case 1:
        //         dayPlanSup.time = "Lunch";
        //         break;
        //     case 2:
        //         dayPlanSup.time = "Dinner";
        //         break;               
        //     default:
        //         dayPlanSup.time = "Snack";
        //         break;
        // }

        //dayPlanSup.recipe = findFavRecipeInfo(e.currentTarget.key);
        const currentId = e.target.value;
        console.log(e.target.value);
        console.log("too many logs");
        console.log(e.target.getAttribute("data-label"));
        console.log(dayPlanSup);
        setDayPlan(dayPlan => [...dayPlan, dayPlanSup]);
        
    }

    function findFavRecipeInfo(id){
        let favRecipe=props.currentUser.favorites.find(recipe => recipe.id == id)
        return favRecipe;
    }

    function saveMealTime(){

        console.log("saveMealTime was invoked!!!")

        let mealPlanSup = {
            userId:"",
            dayPLanList:[]
        }

        mealPlanSup.userId = props.currentUser.userId;
        console.log(props.currentUser.userId);
        console.log(dayPlan);
        mealPlanSup.dayPlanList = dayPlan;
        fetchMealPlan();
    }

    async function fetchMealPlan(){
        console.log("fecthing Meal Plan...");
        console.log(dayPlan);

        let jsonBody = {
            userId: props.currentUser.user_id,
            dayPlanList: dayPlan, 
        }

        console.log(JSON.stringify(jsonBody));

        let res = await fetch(`http://pantry-io-dev-env.eba-f3tnkmt7.us-east-1.elasticbeanstalk.com/meals/save/plan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            },
            body: JSON.stringify(jsonBody)
        
            })
        
            if(res.status != 200){
                // let err = await res.json();
                // // setErrorMessage(err);
                // // setErrorPresent(true);
    
            }else{
                console.log(res.status);
                let json = await res.json();
    
                props.setCurrentUser(json);
                console.log(json);
    
                // // console.log(json);
                // setRecipes(json);
                // setSearchPage('search-select');
                
            }
        }   
    
    //let defaultDate = new Date().format('Y-m-d');
    let minDate = "2021-06-01";
    let maxDate = "2050-12-31";
    let today = new Date().toISOString().slice(0, 10)
    console.log(today);

    // <div className={styles.arrowRightBtnstyles} style={{ marginTop: `${1}rem` }}>
    // <img className={styles.arrowImg} src={rightArrow} alt="rightArrow" style={{marginLeft:`${15}%`}} onClick={nextDay}/>
    // </div>    

    return(
        <>
        <Container fluid className={styles.mealPlanContainer} id="meal-plan-container">
            <Row className={styles.mealPlanNav}>
                <Col  md={4} className={styles.btnContainer}>

                </Col>
                <Col sm={8} md={4} className={styles.calendarContainer} style={{textAlign:`center`}}>
                    <div id="meal-calendar-format" className={styles.dayPlanDetails} >
                        <label htmlFor="dayPlan">Pick your day!!!</label>
                    </div>
                    <input type="date" data-date="" data-date-format="YYYY-MM-DD" id="calendar" name="dayPlan" min={minDate} max={maxDate} onChange={changeDate} />

                </Col>
                <Col md={4} className={styles.btnContainer}>
                   
                </Col> 
            </Row>
                <MealPlanDay setCurrentUser={props.setCurrentUser} currentUser = {props.currentUser} date={date} 
                             count={count} setCount={setCount} dayplan={dayPlan} setDaylPlan={dayPlan} mealPlan={mealPlan} 
                             setMealPlan={setMealPlan}  handleOtionChange ={ handleOtionChange} saveMealTime={saveMealTime}/>      
        </Container>
        </>
    )
}