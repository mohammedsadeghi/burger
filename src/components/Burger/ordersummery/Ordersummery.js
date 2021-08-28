import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


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
            <Button btntype="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btntype="Success" clicked={props.continue}>PROCEED</Button>
        </Aux>
    )
}

export default Ordersummery;