import React from 'react';
import Classes from './Burger.module.css'
import Burgeringridients from './Burgeringridients/Burgeringridients';

const Burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingridient )
        .map( igKey => {
            return [...Array( props.ingridient[igKey] )].map( ( _, i ) => {
                return <Burgeringridients key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length===0)transformedIngredients="enter more"

    return(
        <div className={Classes.Burger}>
            <Burgeringridients type="bread-top"/>
            {transformedIngredients}
            <Burgeringridients type="bread-bottom"/>
        </div>
    )
}
export default Burger;