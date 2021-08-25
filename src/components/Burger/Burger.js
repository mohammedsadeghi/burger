import { concat } from 'lodash';
import React, { Component } from 'react';
import Classes from './Burger.module.css'
import Burgeringridients from './Burgeringridients/Burgeringridients';

const Burger =(props)=>{   
    
         
     
  
        console.log()
        
         let transformingridients=Object.keys(props.ingridient).map(igkey=>{
            return [...Array(props.ingridient[igkey])].map((_,i)=>{
               return <Burgeringridients key={igkey+1} type = {igkey}/>}
                )
            }
       ).reduce((arr,el)=>{
            return arr.concat(el)
       },[])
    
    ;console.log(transformingridients)
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