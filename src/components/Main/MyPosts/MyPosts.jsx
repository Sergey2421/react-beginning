import React from "react";
import Css from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, addTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.posts.map(post => <Post src={post.src} message={post.text} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();


    function click() {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    function onPostChange() {
        let action = addTextActionCreator(newPostElement.current.value, 'mainPage');
        props.dispatch(action);
    }
    return (
        <div className={Css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.posts.newPostText}/>
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