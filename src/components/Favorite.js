import React, { useState } from 'react';

export default function Favorite(props) {
 /* <h2>Name: {props.label}</h2> */
    return(   
        <div id={props.id} className="col-sm-4">
          <div className="card text-center">
              <div className="card-header">
                  <h5 className="card-title"><strong>{props.label}</strong></h5>
              </div>
          </div>
          <div className="card-body">
              <a href={props.url} data-ignore='true' target="_blank" rel="noreferrer"><img src={props.image} alt={props.url}/></a>
              <p className="card-text"><strong>Calories: </strong>{props.calories}</p>
              <p className="card-text"><strong>Servings: </strong>{props.yield}</p>
              <p className="card-text"><strong>Times Prepared: </strong>{props.prepared}</p>
              <div className="row">
                  <div className="col-12">
                      <a href={props.url} data-ignore='true' className="btn btn-primary" target="_blank" rel="noreferrer">See Recipe</a>
                  </div>
                  <div>
                      <button onClick={props.handleUpdate} className="btn btn-primary">Prepared this? Record it here!</button>
                  </div>
              </div>
          </div>
        </div>
    );
}