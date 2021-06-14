import {React, useState} from 'react';

/**
 * Shows the first five favorites in the user's favorites list.
 * @param {*} props 
 * @returns Sub-screen containing up to five favorites, or a message letting the user know they do not have any favorites.
 */
export default function DashFavs(props) {

    /**
     *  
     * @returns First five favorites in user's favorites list, or a message signifying an empty list.
     */
    function initializeScreen() {
        // Before anything else, checks if props.favorites is empty and returns a null response
        if (props.currentUser.favorites.length === 0) {
            // return <p>You have no favorites yet!</p>
            return [];
        } else {
             // Otherwise iterates through list of favorites and pulls the first five, ordering them in a list.
            const favsList = [];
            let decrementor = 5;
            for (let recipe of props.currentUser.favorites) {
                if (decrementor) {
                    favsList.push(recipe);
                    decrementor--;
                } else {
                    break;
                }
            } 
            return favsList;
        }
        
        
    }


    /**
     * 
     * @returns JSX <div> containing structure of sub-component and nested list
     */
    function renderScreen() {
        const favsList = initializeScreen();
        console.log(favsList);
        return (
            <div className='dashboard-favorites'>
                <h3>Favorite Recipes</h3>
                <ul id='dash-fav-list' className='dashboard-list'>
                    {favsList.length > 0 && favsList.map((elem, index) => 
                        <li key={index} className='dashboard-list-item'>
                            <a href={elem.url} target="_blank">{elem.label}</a>
                        </li>)}
                    {favsList.length === 0 && <p>You have no favorites yet!</p>}
                </ul>
                <button type='button' className='dash-fav-head rectangle-button' data-route={'favorites'} onClick={props.viewChange}>
                    View Favorite Recipes
                </button> 
            </div>
        )
    }

    return (
        renderScreen()
    )
}