import {React, useState} from 'react';
import FormField from './FormField';

export default function(props) {

    const changeQuery = (e) => {
        props.setQ(e.target.value);
    }


    function setRoute() {
        if (props.q === '') {
            return 'search'
        } else {
            return 'search-select'
        }
    }

    return (
        <div className="search-query">
            <h2>Search for recipes by their ingredients!</h2>
            <FormField id='dash-search' label='Ingredients:' placeholder='ingredients' onChange={changeQuery} value={props.q} /> {/* Not 100% sure with onChange and value yet */}
            <button type='button' className='form-field form-button' data-route={setRoute()} onClick={props.viewChange}>Search</button>
        </div>
    )
}