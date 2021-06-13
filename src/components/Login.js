import { React, useState } from 'react';
import FormField from './FormField';
//import {authenticate} from "../remote/login-service";

export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        console.log("Authenticating login...");

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
            console.log(authResp.headers.get('Authorization'));
            props.setCurrentToken(authResp.headers.get('Authorization'));
            //props.setCurrentUsername(username);
            

            //Should set homepage to dashboard 
            props.setLanding(false);
            props.viewChange(e);
        }
        else{
            let errorMessage = await authResp.json();
            console.log(errorMessage);
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
            <div className="card">
            <h1>Welcome back!</h1>
            <FormField id="login-username" label="Username" placeholder="johndoe" change={usernameChange} value={username} />
            <FormField id="login-password" label="Password" placeholder="password" change={passwordChange} value={password} />
            {/* I need to wchange the data route back to the dashboard rather than home */}
            <button type="button" data-route="home" className="form-field form-button" onClick={handleLogin}>Log In</button>
            <a href="#" className="form-field" onClick={props.viewChange} data-route="register">New User? Click here to register.</a>
            </div>
        </div>
    )
}
