import {React, useState} from 'react';
import FormField from './FormField';

export default function DashQuery(props) {

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
            <h3>Start searching for recipes...</h3>
            {/* <FormField id='dash-search' label='Ingredients:' placeholder='ingredients' value={props.q} onChange={changeQuery} /> Not 100% sure with onChange and value yet */}
            <button type='button' className='form-field rectangle-button' data-route={'search'} onClick={props.viewChange}>Search</button>
        </div>
    )
}