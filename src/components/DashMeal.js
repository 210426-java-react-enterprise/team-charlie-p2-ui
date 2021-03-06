import {React, useState} from 'react';
import CheckButton from './CheckButton';
//import MealPlan from "./components/MealPlan"; // Until given a proper name, I'll assume the component is called "MealPlan"

/**
 * Displays the user's current day's meal plan
 * @param {*} props 
 * @returns Sub-screen contianing today's meal plan or a message letting the user know they currently do not have any meals set for today.
 */
export default function DashMeal(props) {


    const today = getTodaysDate();
    const todaysMeals = setTodaysMeals();
    const labels = ['breakfast', 'lunch', 'dinner', 'snack'];
    const calorieTotal = calcCalories();

    // const [mealList, setMealList] = useState([]);
    // const [meals, setMeals] = useState([]);
    


    let currentMeali = 0;


    function update(meal, value) {
        console.log('update called');
        let updatedUser = props.currentUser;
        meal.eaten = value;
        if (updatedUser.mealTimeList) {
            for (let foundMeal of updatedUser.mealTimeList) {
                if (foundMeal.date === meal.date && foundMeal.time === meal.time) {
                    foundMeal = meal;
                    props.setCurrentUser(updatedUser);
                    break;
                }
            }
        }
    }

    function setTodaysMeals() {
        if (props.currentUser.mealTimeList){
            return props.currentUser.mealTimeList.filter(meal => meal.date === today );
        } else {
            return [];
        }
    }

    function initializeScreen() {
        if (todaysMeals.length == 0) {
            return <p>You have no meals assigned for today!</p>
        }

        let blockList = [];
        const orderedMeals = orderMeals(todaysMeals);

        for (let i = 0; i < labels.length; i++) {
            let meal = orderedMeals[currentMeali];
            
            const block = (
                <>
                    <h3>{capitalizeFirstLetter(labels[i])}</h3>
                    <div>{createButtonIfExists(meal, i)}</div>
                </>
            )
            blockList.push(block);
        }

        return blockList;
    }

    // function saveToDB() {
    //     let checked = document.getElementsByClassName('');;
    //     var i;
    //     for(i = 0; i<checked.length; i++){
    //         if(checked[i].checked){
    //             addFavorite(recipes[i]);
    //         }
    //     }
    // }

    // <button type='button' onClick={() => saveToDB()}>Save</button>

    function renderScreen() {
        return (
            <div className='dashboard-meals'>
                <h3>Meal Plan</h3>
                <div>{initializeScreen()}</div>
                <p>Today's planned caloric intake: {calorieTotal} kcal</p>
                <button type='button' className='dash-meal-head rectangle-button' data-route='meal plan' onClick={props.viewChange}>
                    View today's Meal Plan
                </button>
            </div>
        )
    }

    function createButtonIfExists(meal, index) {
        if (meal) {
            let recipe = meal.recipe;
            if (meal.time.toLowerCase() === labels[index]) {
                currentMeali++;
                return (
                    <CheckButton className='meal-check-button' id={`meal${meal.time}`} isChecked={meal.eaten} label={labelMaker(recipe)} onClick={() => (update(meal, !meal.eaten))} />
                )
            } else {
                return (
                    <p>No Meal set for this time!</p>
                )
            }
        } else {
            return (
                <p>No Meal set for this time!</p>
            )
        }
        
    }

    function labelMaker(recipe) {
        return (
            <>
                <img src={recipe.image} alt={recipe.label} width="100" height="100" />
                <p>{recipe.label}</p><br />
                <p>Calories: {recipe.calories}</p>
            </>
        )
    }

    function orderMeals(mealList) {
        let newList = [];
        mealList.forEach(meal => {
            for (let label of labels) {
                if (label == meal.time.toLowerCase()) {
                    newList.push(meal);
                    break;
                }
            }
        })
        return newList;
    }

    function calcCalories() {
        let runningCalories = 0;
        todaysMeals.forEach(meal => {
            runningCalories += meal.recipe.calories;
        })
        return runningCalories;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function getTodaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }


    return (
        renderScreen()
    )
}