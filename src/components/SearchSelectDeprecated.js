import {React, useState} from 'react'

export default function SearchSelect(props) {

    const [currRecipe, setCurrRecipe] = useState("");
    const [favorites, setFavorites] = useState([]);

    const addFavorite = () => {
        const favoriteArray = favorites.concat(currRecipe);
        setFavorites(favoriteArray);
    }

    const removeFavorite = () => {
        const favoriteArray = favorites.remove(currRecipe);
        setFavorites(favoriteArray);
    }

    const recipeRows = [];
    for(let recipe of props.recipes){
        const row = (
            <tr key={props.recipes.indexOf(recipe)} id={`row${props.recipes.indexOf(recipe)}`} className='recipe-row' onClick={handleCheckBox}>
                <td key={1}><a href={recipe.url} data-ignore='true'>{recipe.label}</a></td>
                <td key={2}>{recipe.calories}</td>
                <td key={3}>{recipe.yield}</td>
                <td key={4}><img src={recipe.image} alt={recipe.label}/></td>
            </tr>
        )
        recipeRows.push(row);
    }

    function handleCheckBox(e){
        console.log(document.getAttribute('data-ignore'));
        if(document.getElementsByTagName('data-ignore') === 'true'){
            return;
        }else{
            let element = document.getElementById(e.target.id);
            console.log(element);
            console.log('Inside the else block!')
            // element.classList.toggle('highlighted')
        }
        console.log('Checked...')
        // console.log(row);
        // console.log(row.getAttribute(dataRow));

    }

    function handleFavorites(){
        console.log('Favoriting recipes...')

    }

    return (
        <div className="search-select">
            <h2>What would you like to favorite?</h2>
            <table id='recipe-table'>
                <thead id='recipe-table-header'>
                    <tr id='recipe-table-header-row'>
                        <th>Recipe Name</th>
                        <th>Calories</th>
                        <th>Servings</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody id='recipe-table-body'>
                    {recipeRows}
                </tbody>

            </table>
            {/* <input type="checkbox" className="favorite-checkbox" name="favorite" value={}/>{} */}
            <button type="button" className="form-field form-button" onClick={handleFavorites}>Save Favorites</button> <br/>
        </div>

        
    )
}
