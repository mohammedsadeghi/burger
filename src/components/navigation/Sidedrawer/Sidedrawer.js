import React from 'react'; 
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Classes from './Sidedrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

const Sidedrawer =(props)=>{
    let attachedclasses =[Classes.Sidedrawer,Classes.close]
    if (props.open){
        attachedclasses =[Classes.Sidedrawer,Classes.open]
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedclasses.join(" ")}>
                <Logo height={'11%'}/>
                <nav>
                    <Navigationitems></Navigationitems>
                </nav>
            </div>
        </Aux>
    )

}
export default Sidedrawer;