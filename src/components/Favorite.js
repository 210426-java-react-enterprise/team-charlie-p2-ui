import React, { useState } from 'react';

export default function Favorite(props) {

    return(
        
        <div id={props.id} className="inner-favorite-recipe-div">
            <h2>Name: {props.label}</h2>
            <img src={props.image} width="400rem" height="300rem"/>
            <p><strong>Servings:</strong> {props.yield} <br></br><strong>Calories:</strong> {props.calories}
            <strong>Times prepared: </strong>{props.prepared}</p>
            <a href={props.url}>Find it here!</a><br></br><br></br>
            <button onClick = {props.handleRemoval}>Remove from favorites</button>
             <br></br>
             <button onClick = {props.handleUpdate}>Have you made this recipe? Record it here!</button>
        </div>
    );
}