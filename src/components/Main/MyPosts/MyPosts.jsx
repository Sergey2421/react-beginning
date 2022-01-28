import React from "react";
import Css from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post src={post.src} message={post.text} likesCount={post.likesCount}/>);

    return (
        <div className={Css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={Css.posts}>
                {postElements}
            </div>
        </div>)
}

export default MyPosts;