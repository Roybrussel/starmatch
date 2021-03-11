import React from 'react';

const PlayNumber = props => {

    return (
    <button 
        className="number"
        style={{ backgroundColor: props.color[props.status]}}
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
)}

export default PlayNumber;