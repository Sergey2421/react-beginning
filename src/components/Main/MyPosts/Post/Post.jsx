import React from "react";
import Css from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={Css.item}>
            <img src={props.src}/>
            <p>{props.message}</p>
            <button>like</button>
            <span>{props.likesCount}</span>
        </div>
    )
}

export default Post;