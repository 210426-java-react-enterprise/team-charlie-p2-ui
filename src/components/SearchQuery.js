import {React, useState} from 'react'
import FormField from './FormField';
import AlertBox from './AlertBox';

export default function SearchQuery(props) {

    function initiateQChange(){
        props.qChange();
    }

    async function submitSearch(){
        await props.setQ('');
        await props.handleSearch();
        
        console.log(props.q);
    }

    return (
        <div id="search-query" className="screen">
            <h2>Search for Recipes!</h2>
            <FormField id="search-ingredient" label="Ingredients" placeholder="ex: chicken and waffles" change={props.ingredientQ} value={props.q} />
            {props.errorPresent && !props.closed && <AlertBox setClosed={props.setClosed} errorMessage={props.errorMessage}/>}
            <button type="button" className="form-field form-button" onMouseUp={initiateQChange} onClick={submitSearch}>Search</button>
        </div>
    )
}
