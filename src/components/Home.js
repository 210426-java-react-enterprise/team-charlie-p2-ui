import React from 'react'

export default function Home(props) {

    function invokeOnce() {
        props.setCurrentUser({
            username: 'user'
        })
      }

    return (
        <div id="home" className="screen">
            <h1>Welcome to <span>Pantry.io!</span></h1>
            <button type="button" id="home-login" data-route="login" onClick={props.viewChange}>Login</button>
            <button type="button" id="home-register" data-route="register" onClick={props.viewChange}>Register</button>
            <button type="button" id="home-search" data-route="search" onClick={props.viewChange}>Search</button>
            <button type="button" id="home-dash" data-route="dashboard" onClick={props.viewChange}>Dashboard</button>
            <button type="button" id="dummy-button" data-route="dummy-route" onClick={invokeOnce}>dummybutton</button>
        </div>
    )
}
