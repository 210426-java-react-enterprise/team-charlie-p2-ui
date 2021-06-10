import {React, useState} from 'react'

export default function SearchSelect(props) {


        // const removeFavorite = () => {
        //     const favoriteArray = favorites.remove(currRecipe);
        //     setFavorites(favoriteArray);
        // }

    const recipeRows = [];
    for(let recipe of props.recipes){
        const row = (
            <tr key={props.recipes.indexOf(recipe)} id={`row${props.recipes.indexOf(recipe)}`} className='recipe-row'>
                <td key={0}><input type="checkbox" name={recipe.label} onClick={handleCheckBox} className="recipe-checkbox"/></td>
                <td key={1}><a href={recipe.url} data-ignore='true'>{recipe.label}</a></td>
                <td key={2}>{recipe.calories}</td>
                <td key={3}>{recipe.yield}</td>
                <td key={4}><img src={recipe.image} alt={recipe.label}/></td>
            </tr>
        )
        recipeRows.push(row);
    }

    function handleCheckBox(e){
        console.log('Handling checkbox...' + e.target.checked);

    }



    return (
        <div className="search-select">
            <h2>What would you like to favorite?</h2>
            <table id='recipe-table'>
                <thead id='recipe-table-header'>
                    <tr id='recipe-table-header-row'>
                        <th></th>
                        <th>Recipe Name</th>
                        <th>Calories</th>
                        <th>Servings</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody id='recipe-table-body'>
                        {recipeRows}
                </tbody>

            </table>
            {/* <input type="checkbox" className="favorite-checkbox" name="favorite" value={}/>{} */}
            <button type="button" data-route='home' className="form-field form-button" onClick={props.handleFavorites}>Save Favorites</button> <br/>
        </div>

    )
}
