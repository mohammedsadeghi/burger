import React from 'react';
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';

const Toolbar =()=>{
    return(
        <header className={Classes.Toolbar}>
            <div>MENUE</div>
            <Logo/>
            <nav>
                ...
            </nav>
        </header>
    )
}
export default Toolbar;