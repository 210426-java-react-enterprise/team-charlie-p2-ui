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

    function renderScreen() {
        return (
            <div className='dashboard-meals'>
                <button type='button' className='dash-meal-head' data-route='meals' onClick={props.viewChange}>
                    Today's Meal Plan
                </button>
                <p>Today's planned caloric intake: {calorieTotal} kcal</p>
                <div>{initializeScreen()}</div>
            </div>
        )
    }

    function createButtonIfExists(meal, index) {
        if (meal) {
            let recipe = meal.recipe;
            if (meal.time.toLowerCase() === labels[index]) {
                currentMeali++;
                return (
                    <CheckButton id={`meal${meal.time}`} label={labelMaker(recipe)} onClick={() => (update(meal, !meal.eaten))} />
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