import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';

const INGREDIENTS_PRICES={
    meat:1,
    cheese:0.5,
    bacon:2,
    salad:0.3
};
class Burgerbuilder extends Component {
    state={
        ingridients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        price:4
    }
    addingredienthandler=(type)=>{
        const oldcount = this.state.ingridients[type];
        const updatedcount = oldcount +1;
        const updatedingredients = {
            ...this.state.ingridients[type]
        }
        updatedingredients [type]=updatedcount;
        const oldprice = this.state.price;
        const newprice = oldprice + INGREDIENTS_PRICES[type];
        this.setState({
            price:newprice,ingridients:updatedingredients
        })

    }
    render(){
        
        return(
            <div>
                <Burger ingridient={this.state.ingridients} />
                <Buildcontrols  ingridientadded={this.addingredienthandler} />
            </div>
          
                
           
        )
    }
}
export default Burgerbuilder;