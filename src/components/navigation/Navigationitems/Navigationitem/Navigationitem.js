import React from 'react';
import Classes from './Navigationitem.module.css';
import { NavLink } from 'react-router-dom';

const Navigationitem = (props)=>{

    return(
       <li className={Classes.NavigationItem}>
            <NavLink to={props.link} exact
            activeClassName={Classes.active}  >
                 {props.children}</NavLink>
       </li>
    )
}
export default Navigationitem;