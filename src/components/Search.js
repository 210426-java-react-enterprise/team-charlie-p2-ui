import {React, useState} from 'react';
import Home from "./Home";
import SearchQuery from "./SearchQuery";
import SearchSelect from "./SearchSelect";

export default function Search(props){
    const [ingredient, setIngredient] = useState("");
    const [q, setQ] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [searchPage, setSearchPage] = useState('search-query');

    const ingredientChange = (e) =>{
        setIngredient(e.target.value);
    }

    const addIngredientToQ = () => {
        const qArray = q.concat(ingredient);
        setQ(qArray);
    }

    const qChange = () =>{
        const joinedQ = Object.values(q).join('+');
        setQ(joinedQ);
    }


    async function handleSearch(){
        console.log("Searching for recipes...");
        
        qChange();

        let res = await fetch(`http://localhost:5000/recipe/search?q=${q}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(res.status != 200){
            console.log("We've encountered an error retrieving your recipes!")
            console.log(res.status);
        }else{
            console.log(res.status);
            let json = await res.json();

            // console.log(json);
            setRecipes(json);
            setSearchPage('search-select');
            
        }
    }

    function handleFavorites(e){

        console.log('Favoriting recipes...')
        let checked = document.getElementsByClassName('recipe-checkbox');
        // console.log(checked);
        var i;
        for(i = 0; i<checked.length; i++){
            if(checked[i].checked){
                // console.log(checked[i]);
                // console.log(recipes[i]);
                addFavorite(recipes[i]);
            }
        }
       console.log(props.favorites);
       setSearchPage('search-query');
       props.viewChange(e);
    }


    const addFavorite = (recipe) => {
        const favoriteArray = props.favorites;
        favoriteArray.push(recipe);
        props.setFavorites(favoriteArray);
    }

    return (
        <div id="search" className="screen">
            {searchPage === 'search-query' && <SearchQuery addIngredientToQ={addIngredientToQ} ingredientChange={ingredientChange} qChange={qChange} handleSearch={handleSearch} ingredient={ingredient} />}
            {searchPage === 'search-select' && <SearchSelect recipes={recipes} setFavorites={props.setFavorites} favorites={props.favorites} setSearchPage={setSearchPage} viewChange={props.viewChange} handleFavorites={handleFavorites}/>}
            {/* {searchPage === 'home' && props.viewChange('home')} */}
        </div>
    )
}
