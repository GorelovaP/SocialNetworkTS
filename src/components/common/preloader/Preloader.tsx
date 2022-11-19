import s from "../../users/Users.module.css";
import preLoader from "../../assets/images/preLoader.gif";
import React from "react";

export let Preloader = () => {
    return <div>
        <img className={s.preloader} alt={"preLoader"} src={preLoader}/>
    </div>
}