import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

function Profile(props) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;