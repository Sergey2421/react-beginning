import React from "react";
import Css from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={Css.item}>
            <img src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'/>
            <p>{props.message}</p>
            <button>like</button>
            <span>{props.likesCount}</span>
        </div>
    )
}

export default Post;