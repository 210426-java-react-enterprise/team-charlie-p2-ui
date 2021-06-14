import React from 'react'
import ReactDOM from 'react';

export default function AlertBox(props) {

    function closeAlertBox(){
        props.setClosed(true);
    }

    return (
        <div id="alert-box" className="alert-box">
            <span className="close-btn" onClick={closeAlertBox}>&times;</span>
            <div>
                <p>({props.errorMessage.statusCode}) {props.errorMessage.message}</p>
            </div>
            
        </div>
    )
}