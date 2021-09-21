import React, { Component } from 'react';
import Checkoutsummary from '../../components/Order/Checkoutsummery/Checkoutsummery';
import {Route} from 'react-router-dom'
import Checkoutdata from './Checkoutdata/Checkoutdata';
import 'bootstrap/dist/css/bootstrap.css';

class Checkout extends Component{
    state={
        ingredients:null,
        price:0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients ={}
        let price=0;
        for (let param of query.entries()){
            if(param[0]==='price'){
                price=param[1]
            }else{ingredients[param[0]]=+param[1]}
            
        }
        this.setState({ingredients:ingredients,totslprice:price})
    }
    
    checkoutcancel = () =>{
        this.props.history.goBack();
    }
    checkoutproceed = ()=>{
        this.props.history.replace("/checkout/contact-data")
    }
    render(){
        return(
            <div className={"container"}>
                
                    <p><Checkoutsummary 
                    checkoutcancel={this.checkoutcancel} 
                    checkoutproceed={this.checkoutproceed} 
                    ingredients={this.state.ingredients}/></p>
                    <br/>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Route path={this.props.match.url+"/contact-data"} 
                    render={(props)=>(<Checkoutdata ingredients={this.state.ingredients}price={this.state.totslprice} {...props} />)}/>
                </div>
            </div>
        )
    }

}


export default Checkout;