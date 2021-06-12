import {React, useState} from 'react'
import FormField from './FormField';
import AlertBox from './AlertBox';

export default function SearchQuery(props) {

    // //const [query, setQuery] = useState("");
    // const [query, setQuery] = useState([]);
    const [closed, setClosed] = useState(false);


    

    // async function addIngredientClick(){
    //     props.addIngredientToQ();
    //     props.setIngredient("");
    // }

    // function displayQuery(){
    //     //setQuery(Object.values(props.q).join(' '));        
        
    //     // for(let ing of props.q){
    //     //     const row = (
    //     //         <p key={ing}>{ing}</p>
    //     //     )

    //     //     let printQuery = query;
    //     //     printQuery = printQuery.concat(row);
    //     //     setQuery(printQuery);


    //   }
    // }

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
            {props.errorPresent && !closed && <AlertBox setClosed={setClosed} errorMessage={props.errorMessage}/>}
            <button type="button" className="form-field form-button" onMouseUp={initiateQChange} onClick={submitSearch}>Search</button>
        </div>
    )
}
