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
        if (props.favorites === []) {
            return <p>You have no favorites yet!</p>
        }

        // Otherwise iterates through list of favorites and pulls the first five, ordering them in a list.
        const favsList = [];
        let decrementor = 5;
        for (let recipe of props.favorites) {
            if (decrementor) {
                const row = (
                    <li className='dashboard-list'>
                        <button type='button' className='dash-fav-button' onClick={() => window.open(recipe.url, '_blank')}>{recipe.label}</button>
                    </li>
                )
                favsList.push(row);
                decrementor--;
            } else {
                break;
            }
        }
        return favsList;
    }


    /**
     * 
     * @returns JSX <div> containing structure of sub-component and nested list
     */
    function renderScreen() {
        return (
            <div className='dashboard-favorites'>
                <button type='button' className='dash-fav-head' data-route='favorites' onClick={props.viewChange}>
                    <h2>Favorite Recipes</h2>
                </button>
                <ul id='dash-fav-list' className='dashboard-list'>
                    {initializeScreen()}
                </ul>
                <div className='hyperlink' id='view-all-favorites'><a href='#' data-route='favorites' onClick={props.viewChange}>View All</a></div> 
            </div>
        )
    }

    return (
        renderScreen()
    )
}