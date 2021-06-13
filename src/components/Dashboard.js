import {React, useState} from 'react';
import DashFavs from "./DashFavs";
import DashMeal from "./DashMeal";
import DashQuery from "./DashQuery";

export default function Dashboard(props) {

    const recipes = [
        {
            "id": 3,
            "label": "fish",
            "calories": 100,
            "yield": 2,
            "url": "httsdcsacdsa",
            "image": "jcld;jsklcdsa"
        },
        {
            "id": 2,
            "label": "chicken",
            "calories": 300,
            "yield": 3,
            "url": "httsdcsacdsa",
            "image": "jcld;jsklcdsa"
        },
        {
            "id": 1,
            "label": "pork",
            "calories": 200,
            "yield": 3,
            "url": "httsdcsacdsa",
            "image": "jcld;jsklcdsa"
        }
    ]
    const testMeals = [
        {
            "date": "2021-06-13",
            "time": "breakfast",
            "eaten": false,
            "recipe": {
                "id": 1,
                "label": "pork",
                "calories": 200,
                "yield": 3,
                "url": "httsdcsacdsa",
                "image": "jcld;jsklcdsa"
            }
        },
        {
            "date": "2021-06-13",
            "time": "lunch",
            "eaten": false,
            "recipe": {
                "id": 2,
                "label": "chicken",
                "calories": 300,
                "yield": 3,
                "url": "httsdcsacdsa",
                "image": "jcld;jsklcdsa"
            }
        },
        {
            "date": "2021-06-13",
            "time": "dinner",
            "eaten": false,
            "recipe": {
                "id": 3,
                "label": "fish",
                "calories": 100,
                "yield": 2,
                "url": "httsdcsacdsa",
                "image": "jcld;jsklcdsa"
            }
        }
    ]



    return (
        <div id='dash-container' className='screen'>
            {console.log(props.currentUser)}
            <div className='dash-component' id='dash-head-block'>
                <h1 id='dash-h1'>Welcome {props.currentUser.username} to your Dashboard!</h1>
            </div>
            <div className='dash-component' id='dash-search-block'>
                <DashQuery q={props.q} setQ={props.setQ} viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
            </div>
            <div className='dash-component' id='dash-double-block'>
                <div className='dash-sub-component' id='dash-meal-block'>
                    <DashMeal meals={testMeals} viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
                </div>
                <div className='dash-sub-component' id='dash-fav-block'>
                    <DashFavs favorites={recipes} viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
                </div>
            </div>
        </div>
    )


}