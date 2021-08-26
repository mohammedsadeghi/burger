import React from 'react';
import Classes from './Buildcontrols.module.css'
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls=[
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Cheese",type:"Cheese"},
    {label:"Meat",type:"meat"},
]


const Buildcontrols =(props)=>{

    return(
        <div className={Classes.Buildcontrols}>
                {controls.map(ctrl=>{
                   return( <Buildcontrol key={ctrl.label} label={ctrl.label}
                   added={()=>props.ingridientadded(ctrl.type)}
                   />)

                })}
        </div>
    )
}
export default Buildcontrols;