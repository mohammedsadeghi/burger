import React from 'react';
import Classes from "./Backdrop.module.css"
const Backdrop = (props) =>(

    props.show ? <div className={Classes.Backdrop}></div>
    
    
    : null

)
export default Backdrop;