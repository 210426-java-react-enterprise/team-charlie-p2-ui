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

    // const handleRegister = () => {
    //     console.log("Registering...");
    //     console.log(username);
    //     console.log(password);
    //     console.log(email);
    //     fetch('http://localhost:5000/user/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 username,
    //                 password,
    //                 email
    //             }
    //         )
    //     })
    //     .then((res) => {
    //         if(res.status !== 200){
    //             console.log("We've encounterd an error with your request!")
    //         } else{
    //             console.log(res.status);
    //             return res.json();
    //         }
    //     })
    //     .then(json => {
            
    //         console.log(json);
    //         const registeredUsername = json.username;
    //         const registeredPassword = json.password;
           
    //         fetch('http://localhost:5000/auth', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 username: registeredUsername,
    //                 password: registeredPassword
    //             })
    //         })
    //         .then((resp) => {
    //             if(resp.status === 200){
    //                 console.log(resp.headers.get('Authorization'));
    //                 console.log(resp.headers);
    //                 return resp.headers;
    //             }
    //             else{
    //                 console.log("There was an error authenticating your registered user!")
    //             }
    //         })
    //         .then(data => {
                
    //         })
    //     })
    //     .catch(e =>{
    //         console.log(e);
    //     })
    // }

    async function handleRegister() {
        console.log("Registering...");

        let res = await fetch('http://localhost:5000/user/register', {
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

        if(res.status !== 200){
            console.log("We've encounterd an error with your request!")
        } else{
            console.log(res.status);
            let json = await res.json()
            let registeredUsername = json.username;
            let registeredPassword = json.password;
            console.log(json);

            let authResp = await fetch('http://localhost:5000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: registeredUsername,
                    password: registeredPassword
                })
            })

            if(authResp.status === 200){
                console.log(authResp.headers.get('Authorization'));
                console.log(authResp.headers);
                return authResp.headers;
            }
            else{
                console.log("There was an error authenticating your registered user!")
            }

            
        }
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
