import React from 'react'
import Classes from "./Drawertoggle.module.css"
const Drawertoggle = (props) =>{


    return(
    <div className={Classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}

export default Drawertoggle;