import {React, useState} from 'react';
import DashFavs from "./DashFavs";
import DashMeal from "./DashMeal";
import DashQuery from "./DashQuery";

export default function Dashboard(props) {
    return (
        <div id='dash-container' className='screen'>
            {console.log(props.currentUser)}
            <div className='dash-component' id='dash-head-block'>
                <h2 id='dash-h1'>Welcome {props.currentUser.username} to your Dashboard!</h2>
            </div>
            <div className='dash-component' id='dash-search-block'>
                <DashQuery viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
            </div>
            <div className='dash-component' id='dash-meal-block'>
                <DashMeal viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
            </div>
            <div className='dash-component' id='dash-fav-block'>
                <DashFavs viewChange={props.viewChange} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
            </div>
        </div>
    )


}