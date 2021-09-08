import React from 'react';
import Classes from '../Burgeringridients/BurgerIngredient.module.css';

const Burgeringridients =(props)=>{
    let ingridient = null;
    switch (props.type){
        case ('bread-bottom'):
            ingridient=(<div className={Classes.BreadBottom}></div>)
            break;
        case ('bread-top'):
            ingridient=(
            <div className={Classes.BreadTop}>
                <div className={Classes.Seeds1}></div>
                <div className={Classes.Seeds1}></div>
            </div>)
            break;
        case ('meat'):
            ingridient=(<div className={Classes.Meat}></div>)
            break;
        case ('bacon'):
            ingridient=(<div className={Classes.Bacon}></div>)
             break;
        case ('cheese'):
            ingridient=(<div className={Classes.Cheese}></div>)
            break;
        case ('salad'):
            ingridient=(<div className={Classes.Salad}></div>)
            break;
        default:
            ingridient=null;
    }return ingridient;


}

export default Burgeringridients;