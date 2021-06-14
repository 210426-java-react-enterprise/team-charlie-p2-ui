import { React, useState } from 'react';
import FormField from './FormField';
import AlertBox from "./AlertBox"
//import {authenticate} from "../remote/login-service";

export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [closed, setClosed] = useState(false);
    const [errorPresent, setErrorPresent] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});


    async function handleLogin(e) {
        console.log("Authenticating login...");
        //this resets the closed state so if they close the box and try again, the AlertBox will reappear
        setClosed(false);

        let authResp = await fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if(authResp.status === 200){
            let json = await authResp.json();
            console.log(json)
            props.setCurrentUser(json);
        
            //console.log(authResp.headers.get('Authorization'));
            props.setCurrentToken(authResp.headers.get('Authorization'));
           
            

            //Should set homepage to dashboard 
            props.setHomepage('home');
            props.setMenuOptions(['Search', 'Favorites', 'Plan']);
            props.viewChange(e);
        }
        else{
            let err = await authResp.json();
            
            setErrorPresent(true);
            setErrorMessage(err);
        }
    }

    const usernameChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div id="login" className="screen">
            <h2>Welcome back!</h2>
            <FormField id="login-username" label="Username" placeholder="johndoe" change={usernameChange} value={username} />
            <FormField id="login-password" label="Password" placeholder="password" change={passwordChange} value={password} />
            {errorPresent && !closed && <AlertBox setClosed={setClosed} errorMessage={errorMessage}/>}
            {/* I need to wchange the data route back to the dashboard rather than home */}
            <button type="button" data-route="home" className="form-field form-button" onClick={handleLogin}>Log In</button>
            <a href="#" className="form-field" onClick={props.viewChange} data-route="register">New User? Click here to register.</a>
        </div>
    )
}
