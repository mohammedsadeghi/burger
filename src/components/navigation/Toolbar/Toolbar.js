import React from 'react';
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

const Toolbar =()=>{
    return(
        <header className={Classes.Toolbar}>
            <div>MENUE</div>
            <Logo height={"80%"}/>
            <nav>
                <Navigationitems/>
            </nav>
        </header>
    )
}
export default Toolbar;