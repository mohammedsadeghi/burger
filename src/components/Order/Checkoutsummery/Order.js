import React from 'react';
import Classes from './Order.module.css'

const Order =(props)=>{
    console.log(props)
    const  ingredients =[];
    for (let ingredientname in props.ingredients){
        ingredients.push({
            name:ingredientname,
            amount:props.ingredients[ingredientname]
        })
    }
    const ingoutput=ingredients.map(ig=>{
        return <p key={ig.name}><span>{ig.name}:{ig.amount}</span></p>
    })

    return(
        <div className={Classes.Order} >
            <div>
                <p><span>price:{props.price}</span></p>
                {ingoutput}
            </div>
            
        </div>
    )
}
export default Order;