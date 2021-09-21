import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/spinner/Spinner';
import Classes from './Checkoutdata.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class Checkoutdata extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                valid: true
            }
        },
        formIsValid: false,
        loading: false
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
        const arr=[];
        for (let key in this.state.orderForm){
            console.log(this.state.orderForm[key])
            arr.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form=(
            <form>
                    {arr.map(formel=>(
                        <Input key={formel.id}
                        elementType={formel.config.elementType}
                        elementConfig={formel.config.elementConfig}
                        value={formel.config.value} />

                    ))}
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