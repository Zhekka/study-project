import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let postsElements = props.postsData.map((data) => {
            return <Post message={data.message} like={data.likesCount}/>
        }
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }


    return (
        <div className={p.content}>
            <div><h2>My posts</h2>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    <div>
                        <button onClick={addPost}>Add post
                        </button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;