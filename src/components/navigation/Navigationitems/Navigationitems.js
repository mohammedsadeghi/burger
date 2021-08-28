import React from 'react';
import Classes from './Navigationitems.module.css';
import Navigationitem from './Navigationitem/Navigationitem';

const Navigationitems =(props)=>{

    return(
        <ul className={Classes.NavigationItems}>
           <Navigationitem active link={"/"} >Burger Builder </Navigationitem>
           <Navigationitem  link={"/"} >Checkout</Navigationitem>
        </ul>
    )
}
export default Navigationitems;