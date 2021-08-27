import React from 'react';
import Classes from './Modal.module.css'

const Modal = (props) =>(
    <div style={{
        transform : props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity : props.show ? "1":"0"

    }}
    className={Classes.Modal}>
        {props.children}
    </div>
)
export default Modal;