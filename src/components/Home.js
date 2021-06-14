import {React, useState} from 'react'
import AlertBox from "./AlertBox"

export default function Home(props) {

    function invokeOnce() {
        props.setCurrentUser({
            username: 'user',
            username: "bob",
            favorites: [
                {
                    "id": 2,
                    "label": "chicken",
                    "calories": 300,
                    "yield": 3,
                    "url": "httsdcsacddsa",
                    "image": "jcld;jsklcdsa"
                },
                {
                    "id": 1,
                    "label": "pork",
                    "calories": 200,
                    "yield": 3,
                    "url": "httsdcsacdsa",
                    "image": "jcld;jsklcdsa"
                },
                {
                    "id": 3,
                    "label": "fish",
                    "calories": 100,
                    "yield": 2,
                    "url": "httsdcsacdddsa",
                    "image": "jcld;jsklcdsa"
                }
            ],
            mealTimeList: [
                {
                    "mealTimeId": 1,
                    "recipe": {
                        "id": 1,
                        "label": "pork",
                        "calories": 200,
                        "yield": 3,
                        "url": "httsdcsacdsa",
                        "image": "jcld;jsklcdsa"
                    },
                    "eaten": false,
                    "date": "2021-06-13",
                    "time": "breakfast"
                },
                {
                    "mealTimeId": 2,
                    "recipe": {
                        "id": 2,
                        "label": "chicken",
                        "calories": 300,
                        "yield": 3,
                        "url": "httsdcsacddsa",
                        "image": "jcld;jsklcdsa"
                    },
                    "eaten": false,
                    "date": "2021-06-13",
                    "time": "lunch"
                },
                {
                    "mealTimeId": 3,
                    "recipe": {
                        "id": 3,
                        "label": "fish",
                        "calories": 100,
                        "yield": 2,
                        "url": "httsdcsacdddsa",
                        "image": "jcld;jsklcdsa"
                    },
                    "eaten": false,
                    "date": "2021-06-13",
                    "time": "dinner"
                }
            ]
        })
      }
    const [closed, setClosed] = useState(false);
    const [errorPresent, setErrorPresent] = useState(false);

    return (
        <div id="home" className="screen">
            <h1>Welcome to <span>Pantry.io!</span></h1>
            <button type="button" id="home-login" data-route="login" onClick={props.viewChange}>Login</button>
            <button type="button" id="home-register" data-route="register" onClick={props.viewChange}>Register</button>
            <button type="button" id="home-search" data-route="search" onClick={props.viewChange}>Search</button>
            <button type="button" id="home-dash" data-route="dashboard" onClick={props.viewChange}>Dashboard</button>
            <button type="button" id="dummy-button" data-route="dummy-route" onClick={invokeOnce}>dummybutton</button>
            {errorPresent && !closed && <AlertBox setClosed={setClosed}/>}
        </div>
    )
}
