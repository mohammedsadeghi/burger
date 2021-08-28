import React from 'react';
import blogo from '../../assets/pic/burger-logo.png'
import Classes from './Logo.module.css'

const Logo = ()=>{

    return(
        <div className={Classes.Logo}>
            <img src={blogo} alt={"myburger"}/>
        </div>
    )
}
export default Logo;