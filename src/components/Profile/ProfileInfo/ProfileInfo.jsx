import React from "react";
import p from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div>
        <div className={p.wallpaper}>
            <img src='https://www.finiteccanada.com/Images/Blogs/Large/8153.jpg'/>
        </div>
    <div className={p.ava}>
        <img src='https://www.iconfinder.com/data/icons/people-80/96/Picture1-512.png'/>
        Description
    </div>
        </div>
    );
}
export default ProfileInfo;