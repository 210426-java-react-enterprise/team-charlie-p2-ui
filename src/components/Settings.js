import { React, useState } from 'react';
import FormField from './FormField';

export default function Settings(props) {

    const [deleting, setDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const toggleDelete = () => {
        // keep user confirmation info even if popup div is closed and reopened?
        // if so need to set username and password to defaults here
        setDeleting(!deleting);
    }

    const handleUChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePChange = (e) => {
        setPassword(e.target.value);
    }

    const handleDelete = async () => {
        let res = await fetch('http://localhost:5000/user/account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.currentToken
            },
            body: JSON.stringify(
                {
                    username,
                    password
                }
            )
        });

        if(res.status !== 200){
            console.log("We've encounterd an error with deleting your account.")
        } else {
            setDeleting(false);
            setDeleted(true);
            setTimeout(() => {
                props.reset();
            }, 10000);
        }
    }

    return (
        <div className="screen" id="settings">
            <h2>Your account settings:</h2>
            <button type="button" id="delete-account" className="rectangle-button" onClick={toggleDelete}>Delete Account</button>
            {deleting && 
            <div className="delete-overlay">
                <div id="confirm-delete" className="delete-popup">
                    <button type="button" id="exit-confirm-delete" onClick={toggleDelete} className="icon-button"><i className="fas fa-times"></i></button>
                    <h3>Please confirm your account details to delete your account.</h3>
                    <FormField id="delete-confirm-username" label="Username" placeholder="johnsmith" change={handleUChange} value={username} />
                    <FormField id="delete-confirm-password" label="Password" placeholder="password" change={handlePChange} value={password} />
                    <button type="button" className="rectangle-button" id="delete-confirm-button" onClick={handleDelete}>Confirm Delete</button>
                </div>  
            </div>  
            }
            {deleted && 
            <div className="delete-overlay">
                <div id="delete-redirect" className="delete-popup">
                    <h3>Account successfully deleted.</h3>
                    <p>We're sorry to see you go. You will be automatically redirected back to the home screen.</p>
                </div>
            </div>
            }
        </div>
    )
}
