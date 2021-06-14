import {React, useState} from 'react'

export default function CheckButton(props) {

    const [checked, setChecked] = useState();

    const toggleCheck = () => {
        setChecked(!checked);
        props.onClick();
    }

    return (
        <div className="check-button" id={props.id}>
            <button type='button' onClick={() => toggleCheck()}>
                <input type='checkbox' checked={checked} />
                <label htmlFor={props.id}>{props.label}</label>
            </button>
        </div>
    )
}