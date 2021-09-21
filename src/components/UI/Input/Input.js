import React from 'react';
import Classes from './Input.module.css'

const Input = (props) =>{
    let inputel=null;

    switch (props.elementType ) {
        case ("input"):inputel=
        <input  className={Classes.Inputel}
        {...props.elementConfig }
        value={props.value}/>;
        break;
            
        case ("textarea"):
            inputel=<textarea className={Classes.Inputel}
            {...props.elementConfig}value={props.value}/>;
            break;
            case ("select"):inputel=
            (<select  className={Classes.Inputel}
            value={props.value}>
                {props.elementConfig.options.map(op=>(
                    <option key={op.value} value={op.value}>
                        {op.displayValue}
                    </option>
                ))}
            </select>);
            break;
    
        default:
            inputel=<input className={Classes.Inputel}
            {...props.elementConfig}value={props.value}/>
            break;
    }
    return(
        <div className={Classes.Input}>
            <label>{props.label}</label>
            {inputel}
        </div>
    )
}
export default Input;