import { props } from 'bluebird';
import React from 'react'
import Aux from '../../hoc/Aux';
import Toolbar from '../navigation/Toolbar/Toolbar';
import Classes from './Layout.module.css'
export const Layout=(props)=>{
    return(
       <Aux>
           <Toolbar/>
           <main className={Classes.Content}>
               {props.children}
           </main>
       </Aux>
    )
}
export default Layout;

