import {React, useState} from 'react'

export default function SearchSelect(props) {


        // const removeFavorite = () => {
        //     const favoriteArray = favorites.remove(currRecipe);
        //     setFavorites(favoriteArray);
        // }

    const recipeRows = [];
    for(let recipe of props.recipes){
        console.log(recipe);
        const row = (
            <div className="col-sm-4">
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title"><strong>{recipe.label}</strong></h5>
                </div>
                <div className="card-body">
                    <a href={recipe.url} data-ignore='true' target="_blank" rel="noreferrer"><img src={recipe.image} alt={recipe.url}/></a>
                    <p className="card-text"><strong>Calories:</strong> {recipe.calories}</p>
                    <p className="card-text"><strong>Servings:</strong>  {recipe.yield}</p>
                    <div className="row">    
                    <div class="col-12">           
                        <a href={recipe.url} data-ignore='true' class="btn btn-primary" target="_blank" rel="noreferrer">See Recipe</a>
                    </div>
                        {/* Click on it and store this one's favorite into a state object? */}
                        {/* <button onClick={props.changeFavorites} className="btn btn-primary">Favorite</button> */}
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <span>Like this recipe? </span><input type="checkbox" name={recipe.label} className="recipe-checkbox"/>
                </div>
            </div>
            </div>
            // <tr key={props.recipes.indexOf(recipe)} id={`row${props.recipes.indexOf(recipe)}`} className='recipe-row'>
            //     <td key={0}><input type="checkbox" name={recipe.label} onClick={handleCheckBox} className="recipe-checkbox"/></td>
            //     <td key={1}><a href={recipe.url} data-ignore='true'>{recipe.label}</a></td>
            //     <td key={2}>{recipe.calories}</td>
            //     <td key={3}>{recipe.yield}</td>
            //     <td key={4}><img src={recipe.image} alt={recipe.label}/></td>
            // </tr>
        );
        recipeRows.push(row);
    }

    // function handleCheckBox(e){
    //     console.log('Handling checkbox...' + e.target.checked);

    // }



    return (
        
        <div id="search-select" className="search-select">
            <h2>Select your favorite recipes!</h2>
            <div className="row">

                {recipeRows}
            </div>

            <button id="favorite-button" type="button" data-route='home' className="form-field form-button" onClick={props.handleFavorites}>Save Favorites</button> <br/>
            {/* <h2>What would you like to favorite?</h2>
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
            {/* <button type="button" data-route='home' className="form-field form-button" onClick={props.handleFavorites}>Save Favorites</button> <br/> */} 
                            
        </div>

    )
    
}
