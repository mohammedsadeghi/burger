import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import Classes from './Checkoutsummery.module.css'


const Checkoutsummary = (props) =>{

    return(
        <div className={Classes.CheckoutSummary}>
            <h1>ENJOY YOUR FOOD!</h1>
            <div style={{width:"100%",margin:'auto'}}>
                <Burger ingridient={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutcancel} btntype ='Danger'>CANCEL</Button>
            <Button clicked={props.checkoutproceed} btntype ='Success'>PROCEED</Button>

        </div>
    )
}
export default Checkoutsummary;