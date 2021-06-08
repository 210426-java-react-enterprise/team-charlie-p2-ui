import {React, useState} from 'react'
import FormField from './FormField';

export default function SearchQuery(props) {

    return (
        <div className="search-query">
            <h2>Search recipes by ingredients!</h2>
            <FormField id="search-ingredient" label="Ingredient:" placeholder="chicken" change={props.ingredientChange} value={props.ingredient} />
            <button type="button" className="form-field form-button" onClick={props.addIngredientToQ}>Add Ingredient</button> <br/>
            <button type="button" className="form-field form-button" onMouseDown={props.qChange} onMouseUp={props.handleSearch}>Search</button>
        </div>
    )
}
