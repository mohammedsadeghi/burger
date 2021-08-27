import React from 'react';
import Aux from '../../../hoc/Aux';

const Ordersummery =(props)=>{
    const osummery = Object.keys(props.ingredients).map(igkey=>{
        return <li key={igkey}><div style={{textTransform:'capitalize'}} >{igkey}</div> : {props.ingredients[igkey]}       </li>
    })


    return(
        <Aux>
            <p>YOUR ORDER</p>
            <ul>
                {osummery}
            </ul>
        </Aux>
    )
}

export default Ordersummery;