import React from 'react';
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Drawertoggle from '../Sidedrawer/Drawertoggle/Drawertoggle';
const Toolbar =(props)=>{
    return(
        <header className={Classes.Toolbar}>
            <Drawertoggle clicked={props.clicked}/>
            <Logo height={"80%"}/>
            <nav className={Classes.DesktopOnly}>
                <Navigationitems/>
            </nav>
        </header>
    )
}
export default Toolbar;