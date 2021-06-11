import {React, useState} from 'react'
import FormField from './FormField';

export default function SearchQuery(props) {

    // //const [query, setQuery] = useState("");
    // const [query, setQuery] = useState([]);
    

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
        let joinedQ = props.q;
        props.setQ("");
        joinedQ = joinedQ.replace(' and ', '+');
        joinedQ = joinedQ.replace(' ', '+');
        await props.handleSearch(joinedQ);
        
        console.log(props.q);
    }

    return (
        <div className="search-query">
            {/* <div className="current-query" style={{"height":10, "color":'black'}}>
            </div> */}
            <h2>Search recipes by ingredients!</h2>
            <FormField id="search-ingredient" label="Ingredient:" placeholder="ex: chicken and waffles" change={props.ingredientQ} value={props.q} />
            {/* <button type="button" className="form-field form-button" onMouseUp={addIngredientClick} onClick={displayQuery}>Add Ingredient</button> <br/> */}
            <button type="button" className="form-field form-button" onClick={submitSearch}>Search</button>
        </div>
    )
}
