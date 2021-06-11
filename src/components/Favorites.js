import React, { useEffect, useState } from 'react';
import Favorite from './Favorite.js';




export default function Favorites(props) {
    const Authorization = props.currentToken;

    async function getFavorites() {
        console.log("Getting favorite recipes...");
        
        let response = await fetch('http://localhost:5000/user/favorite', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'BearereyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoicnRheWxvciIsImlzcyI6InJldmF0dXJlIiwicm9sZSI6IkJBU0lDX1VTRVIiLCJpYXQiOjE2MjMzNTA5NDYsImV4cCI6MTYyMzQzNzM0Nn0.b_1OBdBUb2E6GZ1-joPGYkMBiFuMCkGxO0IGrgz5VyE'
            }
        });

        if (response.status !== 200) {
            console.log(response.status);
            console.log('Something went wrong in the request');
        } else {
            let json = await response.json();
            let recipes = [];
            //console.log(json);
            for (const [key, value] of Object.entries(json)) {
                recipes.push({
                    id: value.id,
                    label: value.label,
                    calories: value.calories,
                    yield: value.yield,
                    url: value.url,
                    image: value.image
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
                'Authorization': 'BearereyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoicnRheWxvciIsImlzcyI6InJldmF0dXJlIiwicm9sZSI6IkJBU0lDX1VTRVIiLCJpYXQiOjE2MjMzNTA5NDYsImV4cCI6MTYyMzQzNzM0Nn0.b_1OBdBUb2E6GZ1-joPGYkMBiFuMCkGxO0IGrgz5VyE'
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

    return (
        <div id="favorite-recipe" className="favorite-recipe-div">
            <button onClick={getFavorites}>click me</button>
            {props.favoriteRecipes.map((recipe, index) => (
                <Favorite
                    key={index}
                    id={recipe.id}
                    label={recipe.label}
                    yield={recipe.yield}
                    url={recipe.url}
                    image={recipe.image}
                    calories={recipe.calories}
                    handleRemoval={ () => (
                        handleRemoval(recipe.id))} />))}

        </div>
    )

}
