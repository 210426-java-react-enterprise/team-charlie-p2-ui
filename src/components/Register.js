import { React, useState} from 'react';
import FormField from './FormField';

export default function Register(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const usernameChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleRegister = () => {
        console.log("Registering...");
        // make fetch request to API to register new user
    }


    return (
        <div id="register" className="screen">
            <h2>Let's get you cooking!</h2>
            <FormField id="register-username" label="Username:" placeholder="johndoe" change={usernameChange} value={username} />
            <FormField id="register-password" label="Password:" placeholder="password" change={passwordChange} value={password} />
            <FormField id="register-email" label="Email:" placeholder="johndoe@website.com" change={emailChange} value={email} />
            <button type="button" className="form-field form-button" onClick={handleRegister}>Register</button>
            <a href="#" className="form-field" onClick={props.viewChange} data-route="login">Already have an account? Login here.</a>
        </div>
    )
}
