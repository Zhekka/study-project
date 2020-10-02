import React from "react";
import p from "./Post.module.css";


function Post(props) {
    return (
        <div className={p.item}>
            <img src='https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png'/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>

        </div>
    );
}

export default Post;