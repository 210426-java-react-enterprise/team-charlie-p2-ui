import { React, useState } from 'react';
import FormField from './FormField';

export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Authenticating login...");

        // make fetch request to API with username and password here
    }

    const usernameChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div id="home" className="screen">
            <h2>Welcome back!</h2>
            <FormField id="login-username" label="Username:" placeholder="johndoe" change={usernameChange} value={username} />
            <FormField id="login-password" label="Password:" placeholder="password" change={passwordChange} value={password} />
            <button type="button" onClick={handleLogin}>Log In</button>
            <a href="#" onClick={props.viewChange} data-route="register">New User? Click here to register.</a>
        </div>
    )
}
