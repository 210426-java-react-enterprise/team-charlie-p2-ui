import {React, useState} from 'react';
import Home from "./Home";
import SearchQuery from "./SearchQuery";
import SearchSelect from "./SearchSelect";
// import {saveAllRecipes} from "../remote/favorite-service";

export default function Search(props){
    const [ingredient, setIngredient] = useState("");
    const [q, setQ] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [searchPage, setSearchPage] = useState('search-query');
    const [errorPresent, setErrorPresent] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});

    const ingredientQ= (e) =>{
        //setIngredient(e.target.value);
        setQ(e.target.value);
    }

    const addIngredientToQ = () => {
        const qArray = q.concat(ingredient);
        setQ(qArray);
    }

    const qChange = () =>{
        let joinedQ = q;
        joinedQ = joinedQ.replace(' and ', '+');
        joinedQ = joinedQ.replace(' ', '+');
        setQ(joinedQ);
    }


    async function handleSearch(){
        console.log("Searching for recipes...");
        
        qChange();

        let res = await fetch(`http://localhost:5000/recipe/search?q=${q}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            }
        })

        if(res.status != 200){
            let err = await res.json();
            setErrorMessage(err);
            setErrorPresent(true);

        }else{
            console.log(res.status);
            let json = await res.json();

            props.setCurrentUser(json);

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
       setSearchPage('search-query');
       props.viewChange(e);
       console.log(JSON.stringify(props.favorites));
       //console.log(saveAllRecipes(props.favorties));
       console.log(saveFavorites(props.favorites));
    }

    async function saveFavorites(favorites){
        let saveResp = await fetch('http://localhost:5000/user/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            },
            body: JSON.stringify(favorites)
        })

        console.log(saveResp.status);
    }


    const addFavorite = (recipe) => {
        const favoriteArray = props.favorites;
        favoriteArray.push(recipe);
        props.setFavorites(favoriteArray);
    }

    return (
        <div id="search" className="screen">
            {searchPage === 'search-query' && <SearchQuery /*addIngredientToQ={addIngredientToQ} ingredientChange={ingredientChange}*/ ingredientQ={ingredientQ} q={q} setQ={setQ} qChange={qChange} handleSearch={handleSearch} errorMessage={errorMessage} errorPresent={errorPresent}/*setIngredient={setIngredient} ingredient={ingredient}*/ />}
            {searchPage === 'search-select' && <SearchSelect recipes={recipes} setFavorites={props.setFavorites} favorites={props.favorites} setSearchPage={setSearchPage} viewChange={props.viewChange} handleFavorites={handleFavorites}/>}
            {/* {searchPage === 'home' && props.viewChange('home')} */}
        </div>
    )

    
}

