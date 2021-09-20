import React from 'react';
import Classes from './Input.module.css'

const Input = (props) =>{
    let inputel=null;

    switch (props.inputtype ) {
        case ("input"):inputel=<input  className={Classes.Inputel}{...props }/>;
            
        case ("textarea"):inputel=<textarea className={Classes.Inputel}/>;
    
        default:
            inputel=<input className={Classes.Inputel}{...props}/>
    }
    return(
        <div className={Classes.Input}>
            <label>{props.label}</label>
            {inputel}
        </div>
    )
}
export default Input;