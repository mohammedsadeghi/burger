import React from 'react';
import aux from '../../../hoc/Aux';

const Ordersummery =(props)=>{
    const osummery = Object.keys(props.ingredients).map(igkey=>{
        return <li><div style={{textTransform:'capitalize'}} >{igkey}</div> : {props.ingredients[igkey]}       </li>
    })


    return(
        <aux>
            <p>YOUR ORDER</p>
            <ul>
                {osummery}
            </ul>
        </aux>
    )
}

export default Ordersummery;