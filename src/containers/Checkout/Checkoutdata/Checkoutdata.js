import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Classes from './Checkoutdata.module.css';
import axios from '../../../axios-orders'


class Checkoutdata extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }
    orderhandler =(event) =>{
        event.preventDefault(); 
         this.setState({loading:true})
        const order = {
            ingredients:this.props.ingridients,
            price:this.props.price,
            customer:{
                name:"MOHAMMAD"
            }
        }
        axios.post('/orders.json',order)
        .then(response=>{this.setState({loading:false,purchasing:false})
        ;console.log(response)})
        .catch(error=>this.setState({loading:false,purchasing:false}))
       
    }



    render(){
        return(
        <div className={Classes.contactdata}style={{ textAlign:"center",justifyContent:"center"}}>
            <div className={"form-group container"} >
                <h4>ENTER YOUR CONTACT DATA HERE</h4>
                <form>
                    <input className={"form-control"} type="text" name="name" placeholder="YOUR NAME" />
                    <input className={"form-control"} type="email" name="email" placeholder="YOUR email" />
                    <input className={"form-control"} type="text" name="street" placeholder="YOUR street" />
                    <input className={"form-control"} type="text" name="postal" placeholder="YOUR postal code" />
                    <Button clicked={this.orderhandler} className={"btn btn-primary form-control"}>ORDER</Button>
                </form>
            </div>
        </div>
            

        )
    }
}
export default Checkoutdata;