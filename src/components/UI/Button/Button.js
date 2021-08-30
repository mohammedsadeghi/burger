import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Classes from './Button.module.css'

const Button = (props) =>{
 
   return( <button onClick={props.clicked} className={[Classes.Button ,Classes[props.btntype],'btn'].join(' ')} 
        style={{margin:"10px"}}>
        {props.children}
    </button>)
           
}
export default Button;