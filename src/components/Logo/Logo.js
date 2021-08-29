import React from 'react';
import blogo from '../../assets/pic/burger-logo.png'
import Classes from './Logo.module.css'

const Logo = (props)=>{

    return(
        <div className={Classes.Logo} style={{height:props.height}}>
            <img src={blogo} alt={"myburger"}/>
        </div>
    )
}
export default Logo;