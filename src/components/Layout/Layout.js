
import React from 'react'
import Aux from '../../hoc/Aux';
import Toolbar from '../navigation/Toolbar/Toolbar';
import Classes from './Layout.module.css'
import Sidedrawer from '../navigation/Sidedrawer/Sidedrawer';
export const Layout=(props)=>{
    return(
       <Aux>
           <Toolbar/>
           <Sidedrawer/>
           <main className={Classes.Content}>
               {props.children}
           </main>
       </Aux>
    )
}
export default Layout;

