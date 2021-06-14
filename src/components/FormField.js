import React from 'react'

export default function FormField(props) {

    return (
        <div className="form-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.change} value={props.value}></input>
        </div>
    )
}
