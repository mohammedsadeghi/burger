import React from 'react'
import Classes from './BuildControl.module.css'

const Buildcontrol=(props)=>{
    return(
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button onClick={props.added} className={Classes.More}>More</button>
            <button className={Classes.Less}>Less</button>
        </div>
    )
}
export default Buildcontrol;