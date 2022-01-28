import React from "react";

const Friend = (props) => {
    return (
        <div>
            <img src={props.src}/>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;