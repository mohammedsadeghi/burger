import React from 'react';
import Classes from './Modal.module.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) =>(
    <Aux>
        <Backdrop show={props.show} />
        <div style={{
            transform : props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity : props.show ? "1":"0"

        }}
        className={Classes.Modal}>
            {props.children}
        </div>
    </Aux>
)
export default Modal;