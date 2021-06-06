import React from 'react'

export default function Home(props) {
    return (
        <div id="home" className="screen">
            <h1>Welcome to Pantry.io!</h1>
            <button type="button" id="home-login" data-route="login" onClick={props.viewChange}>Login</button>
            <button type="button" id="home-register" data-route="register" onClick={props.viewChange}>Register</button>
        </div>
    )
}
