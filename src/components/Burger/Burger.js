import { concat } from 'lodash';
import React, { Component } from 'react';
import Classes from './Burger.module.css'
import Burgeringridients from './Burgeringridients/Burgeringridients';

const Burger =(props)=>{   
let transformingridients=Object.keys(props.ingridient).map(igkey=>{console.log(igkey)
    return [...Array(props.ingridient[igkey])].map((_ , i)=>{console.log(i)
        return <Burgeringridients key={igkey+i} type = {igkey}/>}
                )
            }
       ).reduce((arr,el)=>{
            return arr.concat(el)
       },[])
    
    ;
    if (transformingridients.length==0)transformingridients="enter more"

    return(
        <div className={Classes.Burger}>
            <Burgeringridients type="bread-top"/>
            {transformingridients}
            <Burgeringridients type="bread-bottom"/>
        </div>
    )
}
export default Burger;