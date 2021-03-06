import { React, useState} from 'react';
import FormField from './FormField';
import AlertBox from "./AlertBox"
//import {authenticate} from "../remote/login-service";

export default function Register(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [closed, setClosed] = useState(false);
    const [errorPresent, setErrorPresent] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});

    const usernameChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    async function handleRegister(e) {
        console.log("Registering...");
        //this resets the closed state so if they close the box and try again, the AlertBox will reappear
        setClosed(false);

        let res = await fetch('http://pantry-io-dev-env.eba-f3tnkmt7.us-east-1.elasticbeanstalk.com/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username,
                    password,
                    email
                }
            )
        })

        if(res.status !== 201){
            let err = await res.json();
            console.log(err);
            //setClosed(false);
            setErrorMessage(err);
            setErrorPresent(true);
        } else{
            console.log(res.status);

            let authResp = await fetch('http://pantry-io-dev-env.eba-f3tnkmt7.us-east-1.elasticbeanstalk.com/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if(authResp.status === 200){
               
                let json = await authResp.json();
                console.log(json)
                props.setCurrentUser(json);

                //console.log(authResp.headers.get('Authorization'));
                props.setCurrentToken(authResp.headers.get('Authorization'));
                
            
                

                //Should set homepage to dashboard 
                props.setLanding(false);
                props.viewChange(e);
            }
            else{
                let err = await authResp.json();
                setErrorMessage(err);
                setErrorPresent(true);
            }

            
        }
    }
                
    return (
        <div id="register" className="screen">
            <div className="landing-card">
            <h1>Welcome to <span>Pantry.io</span></h1>
            <FormField type="text"  id="register-username" label="Username:" placeholder="johndoe" change={usernameChange} value={username} />
            <FormField type="password" id="register-password" label="Password:" placeholder="password" change={passwordChange} value={password} />
            <FormField id="register-email" label="Email:" placeholder="johndoe@website.com" change={emailChange} value={email} />
            {errorPresent && !closed && <AlertBox setClosed={setClosed} errorMessage={errorMessage} />}
            {/* should change data-route to dashboard later */}
            <button type="button" data-route='dashboard' className="form-field form-button" onClick={handleRegister}>Register</button>
            <a href="#" className="form-field" onClick={props.viewChange} data-route="login">Already have an account? Login here.</a>
            </div>
        </div>
    )
}



