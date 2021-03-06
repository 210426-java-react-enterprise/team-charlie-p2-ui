import React from 'react'

export default function Menu(props) {

    const expanded = props.menu ? "expanded" : "not-expanded";

    return (
        <div id="menu" className={expanded}>
            <ul id="menu-items">
                {props.menuOptions.map((elem, index) => <li className="menu-item" key={index} data-route={elem.toLowerCase()} onClick={props.viewChange}>{elem}<i className="fas fa-caret-right"></i></li>)}
            </ul>
        </div>
    )
}
