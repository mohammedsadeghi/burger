import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Classes from './Sidedrawer.module.css'

const Sidedrawer =(props)=>{
    return(
        <div className={Classes.Sidedrawer}>
            <Logo height={'11%'}/>
            <nav>
                <Navigationitems></Navigationitems>
            </nav>
        </div>
    )

}
export default Sidedrawer;