import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Checkoutsummery/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"


class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get("/orders.json").then(res=>{
            const fetchorders =[];
            for (let key in res.data){
                fetchorders.push({...res.data[key],id:key})

            }
            this.setState({loading:false,orders:fetchorders})
        })
        .catch(err=>{
            this.setState({loading:false})
            console.log(err)

        })

    }



    render(){console.log(this.state.orders)

        return(
            <div>
                {this.state.orders.map(el=>{
                     return <Order key={el.id}
                     ingredients={el.ingredients} price={Number.parseFloat(el.price.toFixed(2))}/>
                })}
            </div>
        )
    }
}
export default withErrorHandler(Orders,axios);