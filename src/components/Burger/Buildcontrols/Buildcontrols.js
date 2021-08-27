import React from 'react';
import Classes from './Buildcontrols.module.css'
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls=[
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
]


const Buildcontrols =(props)=>{
    
    return(
        <div className={Classes.BuildControls}>
            <p>TOTAL PRICE:<strong>{props.price.toFixed(2 )}</strong>   </p>
                {controls.map(ctrl=>{
                   return( 
                   <Buildcontrol key={ctrl.label} label={ctrl.label}
                   added={()=>props.ingridientadded(ctrl.type)}
                   removed={()=>props.removeingredient(ctrl.type)}
                   disabled={props.disabled[ctrl.type]}/>)

                })}
            <button onClick={props.ordered} disabled={!props.purchasable} className={Classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}
export default Buildcontrols;