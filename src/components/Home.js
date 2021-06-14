import {React, useState} from 'react'
import AlertBox from "./AlertBox"

export default function Home(props) {

    const [closed, setClosed] = useState(false);
    const [errorPresent, setErrorPresent] = useState(false);

    return (
        <div id="home" className="screen">
            <h1>Welcome to <span>Pantry.io!</span></h1>
            <button type="button" id="home-login" data-route="login" onClick={props.viewChange}>Login</button>
            <button type="button" id="home-register" data-route="register" onClick={props.viewChange}>Register</button>
            <button type="button" id="home-search" data-route="search" onClick={props.viewChange}>Search</button>
            {errorPresent && !closed && <AlertBox setClosed={setClosed}/>}
        </div>
    )
}
