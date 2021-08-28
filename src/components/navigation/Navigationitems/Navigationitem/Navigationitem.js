import React from 'react';
import Classes from './Navigationitem.module.css';

const Navigationitem = (props)=>{

    return(
       <li className={Classes.NavigationItem}>
            <a href={props.link} className={props.active ? Classes.active : null}  >{props.children}</a>
       </li>
    )
}
export default Navigationitem;