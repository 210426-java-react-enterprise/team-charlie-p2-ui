import React, { useEffect, useState } from 'react';
import Favorite from './Favorite.js';




export default function Favorites(props) {
    const Authorization = props.currentToken;

    useEffect(() => {
        getFavorites();
    }, []);

    async function getFavorites() {
        console.log("Getting favorite recipes...");
        
        let response = await fetch('http://localhost:5000/user/favorite', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            }
        });

        if (response.status !== 200) {
            console.log(response.status);
            console.log('Something went wrong in the request');
        } else {
            let json = await response.json();
            let recipes = [];
            console.log(json);
            for (const [key, value] of Object.entries(json)) {
                recipes.push({
                    id: value.recipeId,
                    label: value.label,
                    calories: value.calories,
                    yield: value.yield,
                    url: value.url,
                    image: value.image,
                    prepared: value.timesPrepared
                });
            }
            console.log(recipes);
            props.setFavoriteRecipes(recipes);
           // setFavorites(stuff);
        }
    }

    async function handleRemoval(recipeId) {
        console.log("Removing the recipe...");

        let response = await fetch(`http://localhost:5000/user/favorite/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            }
        }
        );

        if (response.status !== 200) {
            console.log(`Something went wrong with the request. status: ${response.status}`);
        } else {
            console.log('Recpie removed successfully!');
            let newFavorites = props.favoriteRecipes;
            for (let i = 0; i < newFavorites.length; i++) {
                if (newFavorites[i].id === recipeId) {
                    newFavorites.splice(i, 1);
                }
            }
            console.log(newFavorites);
            props.setFavoriteRecipes(newFavorites);
            getFavorites();
            
        }
    }

    async function handleUpdate(amount, recipeId) {
        let response = await fetch(`http://localhost:5000/user/favorite`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : props.currentToken
            },
            body: JSON.stringify({
               timesPrepared: amount,
               recipeId: recipeId
            })
        });
        if(response.status !== 200) {
            console.log(response.status);
            console.log('Something went wrong in the request');
        } else {
            let recipes = props.favoriteRecipes;

            for(let i = 0; i < recipes.length; i++) {
                if (recipes[i].id === recipeId) {
                    recipes[i].prepared = amount;
                }
            }
            console.log(recipes);
            props.setFavoriteRecipes(recipes);
            getFavorites();
        }
    }

    return (
        (props.favoriteRecipes.length === 0) ? 
        <h2>You have no favorites yet!</h2>
        :
        <div className="row">
            {props.favoriteRecipes.map((recipe, index) => (
                <Favorite
                    key={index}
                    id={recipe.id}
                    label={recipe.label}
                    yield={recipe.yield}
                    url={recipe.url}
                    image={recipe.image}
                    calories={recipe.calories}
                    prepared={recipe.prepared}
                    handleRemoval={ () => (
                        handleRemoval(recipe.id))}
                    handleUpdate={ () => (
                        handleUpdate((recipe.prepared + 1), recipe.id)
                    )} />))}

        </div>
    )

}
