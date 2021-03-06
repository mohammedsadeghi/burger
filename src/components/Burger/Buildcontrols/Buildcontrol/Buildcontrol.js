import React from 'react'
import Classes from './BuildControl.module.css'

const Buildcontrol=(props)=>{
    return(
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button onClick={props.added} className={Classes.More}>More</button>
            <button onClick={props.removed} className={Classes.Less}
            disabled={props.disabled}>Less</button>
        </div>
    )
}
export default Buildcontrol;