import React from "react";
import d from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import p from "../../Profile/ProfileInfo/ProfileInfo.module.css";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;


    return (
        <div className={d.dialog + ' ' + d.active}>
            <div className={p.ava}>
                <img src='https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png'/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;