import React from 'react'
import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/Spinner-1s-200px.svg";

function Preloader(props) {
    return(<div>
        <img className={s.preloader} src={preloader}/>
    </div>)
}

export default Preloader;