import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from '../../../components/UI/spinner/Spinner';
import Classes from './Checkoutdata.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


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
        .then(response=>{this.setState({loading:false})
        ;this.props.history.push("/")
        })
        .catch(error=>this.setState({loading:false}))
       
    }



    render(){
        let form=(
            <form>
                    <Input inputtype="input" type="text" name="name" placeholder="YOUR NAME" />
                    <Input inputtype="input" type="email" name="email" placeholder="YOUR email" />
                    <Input inputtype="input" type="text" name="street" placeholder="YOUR street" />
                    <Input inputtype="input" type="text" name="postal" placeholder="YOUR postal code" />
                    <Button clicked={this.orderhandler} className={"btn btn-primary form-control"}>ORDER</Button>
                </form>
        );
        if(this.state.loading){
            form=<Spinner/>
        }
        return(
        <div className={Classes.contactdata}style={{ textAlign:"center",justifyContent:"center"}}>
            <div className={"form-group container"} >
                <h4>ENTER YOUR CONTACT DATA HERE</h4>
                {form}
            </div>
        </div>
            

        )
    }
}
export default Checkoutdata;