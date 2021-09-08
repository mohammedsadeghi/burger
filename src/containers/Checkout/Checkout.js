import React, { Component } from 'react';
import Checkoutsummary from '../../components/Order/Checkoutsummery/Checkoutsummery';

class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients ={}
        for (let param of query.entries()){
            ingredients[param[0]]=+param[1]
        }
        this.setState({ingredients:ingredients})
    }
    
    checkoutcancel = () =>{
        this.props.history.goBack();
    }
    checkoutproceed = ()=>{
        this.props.history.replace("/checkout/contact-data")
    }
    render(){
        return(
            <div>
                <Checkoutsummary checkoutcancel={this.checkoutcancel} checkoutproceed={this.checkoutproceed} ingredients={this.state.ingredients}/>
            </div>
        )
    }

}


export default Checkout;