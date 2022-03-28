import React from "react";
import Css from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.mainPage.posts.map(post => <Post src={post.src} message={post.text} likesCount={post.likesCount}/>);

    function click() {
        props.addPost();
    }

    function onPostChange(e) {
        props.addText(e);
    }
    return (
        <div className={Css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.mainPage.newText}/>
            </div>
            <div>
                <button onClick={click}>Add post
                </button>
            </div>
            <div className={Css.posts}>
                {postElements}
            </div>
        </div>)
}

export default MyPosts;