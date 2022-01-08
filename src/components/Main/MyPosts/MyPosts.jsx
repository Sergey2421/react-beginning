import React from "react";
import Css from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div>
                <Post message={'Hello World!'}/>
            </div>
            <div>
                <Post message={'My name is Sergey'}/>
            </div>
        </div>)
}

export default MyPosts;