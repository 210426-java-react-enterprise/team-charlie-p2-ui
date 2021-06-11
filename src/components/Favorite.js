import React from 'react';

export default function Favorite(props) {

    return(
        <div id={props.id} className="inner-favorite-recipe-div">
            <h2>Name: {props.label}</h2>
            <img src={props.image} width="400rem" height="300rem"/>
            <p><strong>Servings:</strong> {props.yield} <br></br><strong>Calories:</strong> {props.calories}</p>
            <a href={props.url}>Find it here!</a><br></br><br></br>
            <button onClick = {props.handleRemoval}>Remove from favorites</button>
        </div>
    );
}